module.exports = (sequelize, DataTypes) => {
  const ContentTag = sequelize.define('ContentTag', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    contentId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    tagId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  });
  return ContentTag;
};
