const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HotelTypes', {
    HotelTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HotelTypeName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'HotelTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_HotelTypes",
        unique: true,
        fields: [
          { name: "HotelTypeID" },
        ]
      },
    ]
  });
};
