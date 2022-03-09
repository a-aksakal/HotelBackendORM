const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SequelizeMeta', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      unique: "UQ__Sequeliz__72E12F1B9EB830B2"
    }
  }, {
    sequelize,
    tableName: 'SequelizeMeta',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Sequeliz__72E12F1A7AAF5D23",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "UQ__Sequeliz__72E12F1B9EB830B2",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
