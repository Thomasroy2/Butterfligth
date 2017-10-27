/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('picture', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    color: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'picture'
  });
};
