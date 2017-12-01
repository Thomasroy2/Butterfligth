/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('room', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    butterfly1: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    butterfly2: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    life1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    life2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cashpool: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'rooms'
  });
};
