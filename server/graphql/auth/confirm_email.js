const jwt = require('jsonwebtoken');
const { User } = require('../../../database/models');

module.exports = async (req, res) => {
  try {
    const token = Buffer.from(req.params.token, 'base64').toString();
    const { user: { id } } = jwt.verify(token, process.env.JWT_SECRET_KEY);

    await User.update({ is_active: true }, { where: { id } });

    res.redirect('/login');
  } catch (e) {
    res.send('error');
  }
};
