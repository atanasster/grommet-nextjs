module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'users',
      'is_active',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
    );
  },

  down: (queryInterface) => {
    queryInterface.removeColumn(
      'users',
      'is_active'
    );
  },
};
