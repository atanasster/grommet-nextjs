module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
  Content.associate = (models) => {
    // A post belongs to a user
    Content.belongsTo(models.User);
    // A post can belong to many tags
    Content.belongsToMany(models.Tag, { through: 'ContentTag' });
  };
  return Content;
};
