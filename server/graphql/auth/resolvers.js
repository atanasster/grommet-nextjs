const jwt = require('jsonwebtoken');
const withAuth = require('graphql-auth').default;
const { User } = require('../../../database/models');
const UserFind = require('./UserData');
const generateTokens = require('./jwt');

// eslint-disable-next-line no-unused-vars
module.exports = pubsub => ({
  Query: {
    users: withAuth(['user:view:all'], (obj, { orderBy, filter }) => User.getUsers(orderBy, filter)),
    user: withAuth(
      (obj, args, context) => (context.user.id !== args.id ? ['user:view'] : ['user:view:self']),
      (obj, { id }) => UserFind({ id })
    ),
    currentUser(obj, args, context) {
      if (context.user) {
        return UserFind({ id: context.user.id });
      }
      throw new Error('Not Authenticated');
    },
  },
  Mutation: {
    addUser: withAuth(
      (obj, args, context) => (context.user.id !== args.id ? ['user:create'] : ['user:create:self']),
      async (obj, { input }, context) => {
        const userExists = await User.getUserByUsername(input.username);
        if (userExists) {
          throw new Error('Username already exists.');
        }

        const emailExists = await User.getUserByEmail(input.email);
        if (emailExists) {
          throw new Error('E-mail already exists.');
        }

        if (input.password.length < 5) {
          throw new Error('Password must be 5 characters or more.');
        }
        const [createdUserId] = await User.register({ ...input });
        await User.editUserProfile({ id: createdUserId, ...input });

        const user = await User.getUser(createdUserId);

        if (context.mailer && !emailExists && context.req) {
          // async email
          jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' }, (err, emailToken) => {
            const encodedToken = Buffer.from(emailToken).toString('base64');
            const url = `${process.env.WEBSITE_URL}/confirmation/${encodedToken}`;
            context.mailer.sendMail({
              from: `${process.env.APP_NAME} <${process.env.EMAIL_USER}>`,
              to: user.email,
              subject: 'Your account has been created',
              html: `<p>Hi, ${user.username}!</p>
              <p>Welcome to ${process.env.APP_NAME}. Please click the following link to confirm your email:</p>
              <p><a href="${url}">${url}</a></p>
              <p>Below are your login information</p>
              <p>Your email is: ${user.email}</p>
              <p>Your password is: ${input.password}</p>`,
            });
          });
        }
        return { user };
      }
    ),
    editUser: withAuth(
      (obj, args, context) => (context.user.id !== args.id ? ['user:update'] : ['user:update:self']),
      async (obj, { input }) => {
        const userExists = await User.getUserByUsername(input.username);
        if (userExists && userExists.id !== input.id) {
          throw new Error('Username already exists.');
        }

        const emailExists = await User.getUserByEmail(input.email);
        if (emailExists && emailExists.id !== input.id) {
          throw new Error('E-mail already exists.');
        }

        if (input.password && input.password.length < 5) {
          throw new Error('Password must be 5 characters or more.');
        }

        await User.editUser(input);
        await User.editUserProfile(input);

        const user = await User.getUser(input.id);

        return { user };
      }
    ),
    deleteUser: withAuth(
      (obj, args, context) => (context.user.id !== args.id ? ['user:delete'] : ['user:delete:self']),
      async (obj, { id }, context) => {
        const user = await User.getUser(id);
        if (!user) {
          throw new Error('User does not exist.');
        }

        if (user.id === context.user.id) {
          throw new Error('You can not delete your self.');
        }

        const isDeleted = await User.deleteUser(id);
        if (isDeleted) {
          return { user };
        }
        throw new Error('Could not delete user. Please try again later.');
      }
    ),
    async refreshTokens(obj, { refreshToken: inputRefreshToken }, { res }) {
      const { user: id } = jwt.decode(inputRefreshToken);

      const user = await User.findOne({ where: { id } });
      const refreshSecret = process.env.JWT_SECRET_KEY + user.password;

      try {
        jwt.verify(inputRefreshToken, refreshSecret);
      } catch (e) {
        res.status(401);
        throw e;
      }

      const [accessToken, refreshToken] = await generateTokens(user);

      return {
        accessToken,
        refreshToken,
      };
    },
  },
});
