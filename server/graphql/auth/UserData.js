const { User } = require('../../../database/models');

const UserProfileFields = user => ({
  id: user.id,
  username: user.username,
  role: user.role,
  email: user.email,
  profile: user.profile ? {
    firstName: user.profile.firstName,
    lastName: user.profile.lastName,
    fullName: user.profile.fullName,
  } : undefined,
});

module.exports = async (where) => {
  const user = await User.findOne({ where });
  return user ? UserProfileFields(user) : null;
};

module.exports.UserProfileFields = UserProfileFields;
