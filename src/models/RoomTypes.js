const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RoomTypes', {
    RoomTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RoomTypeName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RoomTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_RoomTypes",
        unique: true,
        fields: [
          { name: "RoomTypeID" },
        ]
      },
    ]
  });
};
