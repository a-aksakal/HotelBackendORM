const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Denemes', {
    DenemeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DenemeName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Denemes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Denemes",
        unique: true,
        fields: [
          { name: "DenemeID" },
        ]
      },
    ]
  });
};
