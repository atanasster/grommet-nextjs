const passport = require('passport');
const { OAuth2Strategy } = require('passport-google-oauth');
const { User, Sequelize } = require('../../../../database/models');
const { userProfileFields, updateUserProfile } = require('../UserData');
const generateTokens = require('../jwt');
const oAuthtemplate = require('../popupTemplpate');


if (process.env.GOOGLE_APP_ID) {
  passport.use(
    new OAuth2Strategy(
      {
        clientID: process.env.GOOGLE_APP_ID,
        clientSecret: process.env.GOOGLE_APP_SECRET,
        callbackURL: `${process.env.WEBSITE_URL}/auth/google/callback`,
        profileFields: ['id', 'emails', 'name', 'displayName', 'picture.type(normal)',
          'profileUrl', 'gender'],

      },
      (async (accessToken, refreshToken, profile, done) => {
        const {
          id, username, displayName, name: { givenName: firstName, familyName: lastName },
          _json: { url: profileUrl },
          emails: [{ value }], photos: [{ value: picture }], gender,
        } = profile;
        try {
          let user = await User.findOne(
            { where: { [Sequelize.Op.or]: [{ google_id: id }, { email: value }] } }
          );
          if (!user) {
            user = await User.create({
              username: username || displayName,
              email: value,
              password: id,
              is_active: true,
              google_name: displayName,
              google_id: id,
              firstName,
              lastName,
              picture,
              gender,
              google_url: profileUrl,
            });
          } else if (!user.google_id) {
            user = await updateUserProfile(user,
              {
                google_name: displayName,
                google_id: id,
                firstName,
                lastName,
                picture,
                gender,
                google_url: profileUrl,
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
    app.get('/auth/google', (req, res, next) => {
      passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'],
      })(req, res, next);
    });

    app.get('/auth/google/callback', passport.authenticate('google', { session: false }), async (req, res) => {
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
