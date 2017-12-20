module.exports = function(sequelize, DataTypes) {
  return sequelize.define('battleLog', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    attackerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    attackerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    targetId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    skillId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
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
    tableName: 'butterfly'
  });
};
