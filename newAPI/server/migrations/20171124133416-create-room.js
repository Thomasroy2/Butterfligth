'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      butterfly1: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      butterfly2: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      life1: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      life2: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      cashpool: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Rooms');
  }
};
