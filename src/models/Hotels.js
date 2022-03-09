const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Hotels', {
    HotelID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HotelName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StarID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Stars',
        key: 'StarID'
      }
    },
    HotelTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'HotelTypes',
        key: 'HotelTypeID'
      }
    },
    CountyID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Counties',
        key: 'CountyID'
      }
    },
    HotelImage: {
      type: DataTypes.STRING(250),
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
    tableName: 'Hotels',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Hotels",
        unique: true,
        fields: [
          { name: "HotelID" },
        ]
      },
    ]
  });
};
