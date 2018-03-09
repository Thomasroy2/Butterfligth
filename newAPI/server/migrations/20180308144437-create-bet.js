'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gambler: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fighter1: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:true,
      },
      fighter2: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:0,
      },
      room: {
        type: Sequelize.INTEGER,
        references:{
          model:'rooms',
          key:'id',
        }
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
    return queryInterface.dropTable('Bets');
  }
};