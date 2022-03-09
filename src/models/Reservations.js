const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reservations', {
    ReservationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RoomDetailID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'RoomDetails',
        key: 'RoomDetailID'
      }
    },
    StartDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    EndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
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
    tableName: 'Reservations',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Reservations",
        unique: true,
        fields: [
          { name: "ReservationID" },
        ]
      },
    ]
  });
};
