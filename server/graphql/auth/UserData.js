const { User } = require('../../../database/models');

const fn = {};

const userProfileFields = user => ({
  id: user.id,
  username: user.username,
  role: user.role,
  email: user.email,
  firstName: user.firstName,
  lastName: user.lastName,
  picture: user.picture,
  facebook_id: user.facebook_id,
  facebook_name: user.facebook_name,
  facebook_url: user.facebook_url,
  google_id: user.google_id,
  google_name: user.google_name,
  google_url: user.google_url,
  linkedin_id: user.linkedin_id,
  linkedin_name: user.linkedin_name,
  linkedin_url: user.linkedin_url,
  github_id: user.github_id,
  github_name: user.github_name,
  github_url: user.github_url,
});


fn.userProfileFields = userProfileFields;

fn.userFind = async (where) => {
  const user = await User.findOne({ where });
  return user ? userProfileFields(user) : null;
};

fn.updateUserProfile = async (user, newProfile) => {
  const {
    firstName, lastName, picture, gender, ...rest
  } = newProfile;
  const newUser = { ...rest };
  if (!user.firstName) {
    newUser.firstName = firstName;
  }
  if (!user.lastName) {
    newUser.lastName = lastName;
  }
  if (!user.picture) {
    newUser.picture = picture;
  }
  if (!user.gender) {
    newUser.gender = gender;
  }
  await User.update(newUser, { where: { id: user.id } });
  return { id: user.id, ...newUser };
};

module.exports = fn;
