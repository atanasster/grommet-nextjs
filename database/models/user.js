module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: DataTypes.STRING,
    picture: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user',
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    gender: { type: DataTypes.ENUM('male', 'female') },
    facebook_id: DataTypes.STRING,
    facebook_name: DataTypes.STRING,
    facebook_url: DataTypes.STRING,
    google_id: DataTypes.STRING,
    google_name: DataTypes.STRING,
    google_url: DataTypes.STRING,
    linkedin_id: DataTypes.STRING,
    linkedin_name: DataTypes.STRING,
    linkedin_url: DataTypes.STRING,
    github_id: DataTypes.STRING,
    github_name: DataTypes.STRING,
    github_url: DataTypes.STRING,
  });
  User.associate = (models) => {
    // A user can have many posts
    User.hasMany(models.Content, { onDelete: 'CASCADE' });
  };
  return User;
};
