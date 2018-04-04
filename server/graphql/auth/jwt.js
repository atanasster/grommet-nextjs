const jwt = require('jsonwebtoken');

module.exports = async (user) => {
  const secret = process.env.JWT_SECRET_KEY;
  const refreshSecret = process.env.JWT_SECRET_KEY + user.password;
  const tokenUser = { id: user.id, username: user.username, role: user.role };
  tokenUser.fullName = user.firstName ? `${user.firstName} ${user.lastName}` : null;
  const createToken = jwt.sign(
    {
      user: tokenUser,
    },
    secret,
    {
      expiresIn: '1w',
    }
  );

  const createRefreshToken = jwt.sign(
    {
      user: user.id,
    },
    refreshSecret,
    {
      expiresIn: '1y',
    }
  );

  return Promise.all([createToken, createRefreshToken]);
};
