const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cities', {
    CityID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CityName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Cities',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Cities",
        unique: true,
        fields: [
          { name: "CityID" },
        ]
      },
    ]
  });
};
