const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Counties', {
    CountyID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CountyName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CityID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Cities',
        key: 'CityID'
      }
    }
  }, {
    sequelize,
    tableName: 'Counties',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Counties",
        unique: true,
        fields: [
          { name: "CountyID" },
        ]
      },
    ]
  });
};
