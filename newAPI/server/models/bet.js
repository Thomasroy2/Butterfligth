'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bet = sequelize.define('Bet', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gambler: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    fighter1: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true,
    },
    fighter2: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:false,
    },
    amount:{
       type:DataTypes.INT,
       allowNull: false,
       defaultValue:0,
      },
    room:{
      type: DataTypes.INT,
      references:{
        model:'room',
        key:'id',
      }
    },
  },{
    tableName: 'Bets'
  });
  return Bet;
};