/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    effect: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    base_attack: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    rate_attack: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    rate_priority: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    rate_fail: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    rate_effect: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    base_priority: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    base_effect: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    base_fail: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    is_unique: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'skill'
  });
};
