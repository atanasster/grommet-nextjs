const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const { User, Sequelize } = require('../../../../database/models');
const { userProfileFields, updateUserProfile } = require('../UserData');
const generateTokens = require('../jwt');
const oAuthtemplate = require('../popupTemplpate');

if (process.env.GITHUB_APP_ID) {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_APP_ID,
        clientSecret: process.env.GITHUB_APP_SECRET,
        callbackURL: `${process.env.WEBSITE_URL}/auth/github/callback`,
        scope: 'user:email',
        profileFields: ['id', 'emails', 'name', 'displayName', 'picture.type(normal)',
          'profileUrl'],
      },
      (async (accessToken, refreshToken, profile, done) => {
        const {
          id, username, displayName,
          profileUrl, emails: [{ value }], photos: [{ value: picture }],
        } = profile;
        try {
          let user = await User.findOne(
            { where: { [Sequelize.Op.or]: [{ github_id: id }, { email: value }] } }
          );
          if (!user) {
            user = await User.create({
              username: username || displayName,
              email: value,
              password: id,
              is_active: true,
              github_name: displayName || username,
              github_id: id,
              picture,
              github_url: profileUrl,
            });
          } else if (!user.github_id) {
            user = await updateUserProfile(user,
              {
                github_name: displayName || username,
                github_id: id,
                picture,
                github_url: profileUrl,
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
    app.get('/auth/github', (req, res, next) => {
      passport.authenticate('github')(req, res, next);
    });
    app.get('/auth/github/callback', passport.authenticate('github', { session: false }), async (req, res) => {
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
