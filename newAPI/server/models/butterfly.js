/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('butterfly', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    catchphrase: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hp: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    attack: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    defense: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    luck: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    speed: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    mortality: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    unique_skill: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'skill',
        key: 'id'
      }
    }
  }, {
    tableName: 'butterfly'
  });
};
