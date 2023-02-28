'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('Books', 'publisher',
     { type: Sequelize.STRING,
      allowNull: true, });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('Books', 'publisher');
  }
};
