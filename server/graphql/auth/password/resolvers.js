const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../../../database/models');
const { UserProfileFields } = require('../UserData');
const generateTokens = require('../jwt');
const mailer = require('../../mailer');

const validateUserPassword = async (user, password) => {
  if (!user) {
    // user with provided email not found
    throw new Error('Please enter a valid e-mail.');
  }
  if (!user.is_active) {
    throw new Error('Please confirm your e-mail first.');
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    // bad password
    throw new Error('Please enter a valid password.');
  }
};

module.exports = () => ({
  Mutation: {
    async login(obj, { input: { email, password } }, { req }) {
      const user = await User.findOne({ where: { email } });
      await validateUserPassword(user, password);
      const tokens = await generateTokens(user, req);
      return {
        user: UserProfileFields(user),
        tokens: { accessToken: tokens[0], refreshToken: tokens[1] },
      };
    },
    async register(obj, { input }, context) {
      const userExists = await User.findOne({ where: { username: input.username } });
      if (userExists) {
        throw new Error('Username already exists.');
      }

      const emailExists = await User.findOne({ where: { email: input.email } });
      if (emailExists) {
        throw new Error('E-mail already exists.');
      }

      const { email, password, username } = input;
      const user = await User.create({
        username,
        email,
        is_active: false,
        password: await bcrypt.hash(password, 10),
      });
      console.log(user);
      if (context.req) {
        // async email
        jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' }, (err, emailToken) => {
          const encodedToken = Buffer.from(emailToken).toString('base64');
          const url = `${process.env.WEBSITE_URL}/confirmation/${encodedToken}`;
          mailer.sendMail({
            from: `${process.env.APP_NAME} <${process.env.EMAIL_USER}>`,
            to: user.email,
            subject: 'Confirm Email',
            html: `<p>Hi, ${user.username}!</p>
              <p>Welcome to ${process.env.APP_NAME}. Please click the following link to confirm your email:</p>
              <p><a href="${url}">${url}</a></p>
              <p>Below are your login information</p>
              <p>Your email is: ${user.email}</p>
              <p>Your password is: ${input.password}</p>`,
          });
        });
      }

      return { user: UserProfileFields(user) };
    },
    async forgotPassword(obj, { input }) {
      const user = await User.findOne({ where: { email: input.email } });
      if (user) {
        // async email
        jwt.sign(
          { email: user.email, password: user.password },
          process.env.JWT_SECRET_KEY,
          { expiresIn: '1d' },
          (err, emailToken) => {
            // encoded token since react router does not match dots in params
            const encodedToken = Buffer.from(emailToken).toString('base64');
            const url = `${process.env.WEBSITE_URL}/reset-password/${encodedToken}`;
            mailer.sendMail({
              from: `${process.env.APP_NAME} <${process.env.EMAIL_USER}>`,
              to: user.email,
              subject: 'Reset Password',
              html: `Please click this link to reset your password: <a href="${url}">${url}</a>`,
            });
          }
        );
      }
      return input.email;
    },
    async resetPassword(obj, { input }) {
      const reset = {
        password: input.password,
        passwordConfirmation: input.passwordConfirmation,
        token: input.token,
      };
      if (reset.password !== reset.passwordConfirmation) {
        throw new Error('Passwords do not match.');
      }

      if (reset.password.length < 5) {
        throw new Error('Password must be 5 characters or more.');
      }

      const token = Buffer.from(reset.token, 'base64').toString();
      const { email, password } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await User.findOne({ where: { email } });
      if (user.password !== password) {
        throw new Error('Invalid token');
      }

      if (user) {
        await User.update(
          { password: await bcrypt.hash(reset.password, 10) },
          { where: { id: user.id } }
        );
      }
      return { ok: true };
    },
  },
});
