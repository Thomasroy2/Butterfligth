/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('passive', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    effect: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    base_activation: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    rate_activation: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'passive'
  });
};
