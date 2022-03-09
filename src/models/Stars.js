const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Stars', {
    StarID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StarName: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Stars',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Stars",
        unique: true,
        fields: [
          { name: "StarID" },
        ]
      },
    ]
  });
};
