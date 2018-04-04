module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Users',
      'role',
      {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'user',
      }
    );
  },

  down: (queryInterface) => {
    queryInterface.removeColumn(
      'Users',
      'role'
    );
  },
};
