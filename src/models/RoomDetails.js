const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RoomDetails', {
    RoomDetailID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HotelID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Hotels',
        key: 'HotelID'
      },
      unique: "IX_RoomDetails"
    },
    RoomTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'RoomTypes',
        key: 'RoomTypeID'
      },
      unique: "IX_RoomDetails"
    },
    CreationDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    UpdateDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RoomDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_RoomDetails",
        unique: true,
        fields: [
          { name: "HotelID" },
          { name: "RoomTypeID" },
        ]
      },
      {
        name: "PK_RoomDetails_1",
        unique: true,
        fields: [
          { name: "RoomDetailID" },
        ]
      },
    ]
  });
};
