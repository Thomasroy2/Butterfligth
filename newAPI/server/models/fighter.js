/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fighter', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    butterflyId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    hp: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    skill1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    skill2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    skill3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    skill4: {
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
    tableName: 'fighter'
  });

  fighter.associate = (models) => {
      fighter.belongsTo(models.butterfly, {
        foreignKey: 'butterflyId',
        onDelete: 'CASCADE',
      });
    };

};
