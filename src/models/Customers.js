const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customers', {
    CustomerID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomerName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CustomerSurname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Phone: {
      type: DataTypes.CHAR(13),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    CityID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Cities',
        key: 'CityID'
      }
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
    tableName: 'Customers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Customers",
        unique: true,
        fields: [
          { name: "CustomerID" },
        ]
      },
    ]
  });
};
