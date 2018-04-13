const passport = require('passport');
const LinkedinStrategy = require('passport-linkedin-oauth2').Strategy;
const { User, Sequelize } = require('../../../../database/models');
const { userProfileFields, updateUserProfile } = require('../UserData');
const generateTokens = require('../jwt');
const oAuthtemplate = require('../popupTemplpate');


if (process.env.LINKEDIN_APP_ID) {
  passport.use(
    new LinkedinStrategy(
      {
        clientID: process.env.LINKEDIN_APP_ID,
        clientSecret: process.env.LINKEDIN_APP_SECRET,
        callbackURL: '/auth/linkedin/callback',
        scope: ['r_basicprofile', 'r_emailaddress'],
      },
      (async (accessToken, refreshToken, profile, done) => {
        const {
          id, username, displayName, name: { givenName: firstName, familyName: lastName },
          _json: { publicProfileUrl: profileUrl },
          emails: [{ value }], photos: [{ value: picture }], gender,
        } = profile;
        try {
          let user = await User.findOne(
            { where: { [Sequelize.Op.or]: [{ linkedin_id: id }, { email: value }] } }
          );
          if (!user) {
            user = await User.create({
              username: username || displayName,
              email: value,
              password: id,
              is_active: true,
              linkedin_name: displayName,
              linkedin_id: id,
              firstName,
              lastName,
              picture,
              gender,
              linkedin_url: profileUrl,
            });
          } else if (!user.linkedin_id) {
            user = await updateUserProfile(user,
              {
                linkedin_name: displayName,
                linkedin_id: id,
                firstName,
                lastName,
                picture,
                gender,
                linkedin_url: profileUrl,
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
    app.get('/auth/linkedin', (req, res, next) => {
      passport.authenticate('linkedin')(req, res, next);
    });

    app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { session: false }), async (req, res) => {
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
