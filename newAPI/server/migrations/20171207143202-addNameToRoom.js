'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.addColumn(
      'Rooms',
      'name',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  },

  down: (queryInterface, Sequelize) => {

    queryInterface.removeColumn(
      'Rooms',
      'name',
    )
  }

};
