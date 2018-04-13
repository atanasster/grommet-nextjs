const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const { User, Sequelize } = require('../../../../database/models');
const { userProfileFields, updateUserProfile } = require('../UserData');
const generateTokens = require('../jwt');
const oAuthtemplate = require('../popupTemplpate');

if (process.env.FACEBOOK_APP_ID) {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: '/auth/facebook/callback',
        scope: ['email'],
        profileFields: ['id', 'emails', 'name', 'displayName', 'picture.type(normal)',
          'profileUrl', 'gender'],
      },
      (async (accessToken, refreshToken, profile, done) => {
        const {
          id, username, displayName, name: { givenName: firstName, familyName: lastName },
          profileUrl, emails: [{ value }], photos: [{ value: picture }], gender,
        } = profile;
        try {
          let user = await User.findOne(
            { where: { [Sequelize.Op.or]: [{ facebook_id: id }, { email: value }] } }
          );
          if (!user) {
            user = await User.create({
              username: username || displayName,
              email: value,
              password: id,
              is_active: true,
              facebook_name: displayName,
              facebook_id: id,
              firstName,
              lastName,
              picture,
              gender,
              facebook_url: profileUrl,
            });
          } else if (!user.facebook_id) {
            user = await updateUserProfile(user,
              {
                facebook_name: displayName,
                facebook_id: id,
                firstName,
                lastName,
                picture,
                gender,
                facebook_url: profileUrl,
              });
          }
          const userJSON = userProfileFields(user);
          done(null, userJSON);
        } catch (err) {
          done(err, {});
        }
      })
    )
  );

  const middleware = (app) => {
    app.use(passport.initialize());
    app.get('/auth/facebook', (req, res, next) => {
      passport.authenticate('facebook')(req, res, next);
    });
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }), async (req, res) => {
      const user = await User.findOne({ where: { id: req.user.id } });
      const tokens = await generateTokens(user, req);
      res.send(oAuthtemplate({
        title: 'Success',
        status: 'success',
        payload: { user: userProfileFields(user), tokens },
      }));
    });
  };

  module.exports = {
    middleware,
  };
} else {
  module.exports = {
  };
}
