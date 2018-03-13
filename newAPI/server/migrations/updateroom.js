module.exports = {
    up:(queryInterface, Sequelize) => {
        return queryInterface.createTable('rooms',{
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            name:{
              type:Sequelize.STRING,
              allowNull:false
            },
            butterfly1: {
              type: Sequelize.INTEGER,
              allowNull: true
            },
            butterfly2: {
              type: Sequelize.INTEGER,
              allowNull: true
            },
            attackerTurnId: {
              type: Sequelize.INTEGER,
              allowNull: true
            },
            winner: {
              type: Sequelize.INTEGER,
              allowNull: true
            },
            cashpoolfighter1: {
              type: Sequelize.INTEGER,
              allowNull: true
            },
            cashpoolfighter2: {
              type: Sequelize.INTEGER,
              allowNull: true
            },
            createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
            },
            updatedAt: {
              allowNull: false,
              type: Sequelize.DATE,
            },
          } )
    },
    down:(queryInterface, Sequelize) => {
        return queryInterface.createTable('rooms',{
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            name:{
              type:Sequelize.STRING,
              allowNull:false
            },
            butterfly1: {
              type: Sequelize.INTEGER,
              allowNull: true
            },
            butterfly2: {
              type: Sequelize.INTEGER,
              allowNull: true
            },
            attackerTurnId: {
              type: Sequelize.INTEGER,
              allowNull: true
            },
            winner: {
              type: Sequelize.INTEGER,
              allowNull: true
            },
            cashpool: {
              type: Sequelize.INTEGER,
              allowNull: true
            },
            createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
            },
            updatedAt: {
              allowNull: false,
              type: Sequelize.DATE,
            },
        })
    }
}