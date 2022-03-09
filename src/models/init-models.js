var DataTypes = require("sequelize").DataTypes;
var _Cities = require("./Cities");
var _Counties = require("./Counties");
var _Customers = require("./Customers");
var _HotelTypes = require("./HotelTypes");
var _Hotels = require("./Hotels");
var _Prices = require("./Prices");
var _Reservations = require("./Reservations");
var _RoomDetails = require("./RoomDetails");
var _RoomTypes = require("./RoomTypes");
var _Stars = require("./Stars");
var _Users = require("./Users");

function initModels(sequelize) {
  var Cities = _Cities(sequelize, DataTypes);
  var Counties = _Counties(sequelize, DataTypes);
  var Customers = _Customers(sequelize, DataTypes);
  var HotelTypes = _HotelTypes(sequelize, DataTypes);
  var Hotels = _Hotels(sequelize, DataTypes);
  var Prices = _Prices(sequelize, DataTypes);
  var Reservations = _Reservations(sequelize, DataTypes);
  var RoomDetails = _RoomDetails(sequelize, DataTypes);
  var RoomTypes = _RoomTypes(sequelize, DataTypes);
  var Stars = _Stars(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);

  Counties.belongsTo(Cities, { as: "City", foreignKey: "CityID"});
  Cities.hasMany(Counties, { as: "Counties", foreignKey: "CityID"});
  Customers.belongsTo(Cities, { as: "City", foreignKey: "CityID"});
  Cities.hasMany(Customers, { as: "Customers", foreignKey: "CityID"});
  Hotels.belongsTo(Counties, { as: "County", foreignKey: "CountyID"});
  Counties.hasMany(Hotels, { as: "Hotels", foreignKey: "CountyID"});
  Hotels.belongsTo(HotelTypes, { as: "HotelType", foreignKey: "HotelTypeID"});
  HotelTypes.hasMany(Hotels, { as: "Hotels", foreignKey: "HotelTypeID"});
  RoomDetails.belongsTo(Hotels, { as: "Hotel", foreignKey: "HotelID"});
  Hotels.hasMany(RoomDetails, { as: "RoomDetails", foreignKey: "HotelID"});
  Prices.belongsTo(RoomDetails, { as: "RoomDetail", foreignKey: "RoomDetailID"});
  RoomDetails.hasMany(Prices, { as: "Prices", foreignKey: "RoomDetailID"});
  Reservations.belongsTo(RoomDetails, { as: "RoomDetail", foreignKey: "RoomDetailID"});
  RoomDetails.hasMany(Reservations, { as: "Reservations", foreignKey: "RoomDetailID"});
  RoomDetails.belongsTo(RoomTypes, { as: "RoomType", foreignKey: "RoomTypeID"});
  RoomTypes.hasMany(RoomDetails, { as: "RoomDetails", foreignKey: "RoomTypeID"});
  Hotels.belongsTo(Stars, { as: "Star", foreignKey: "StarID"});
  Stars.hasMany(Hotels, { as: "Hotels", foreignKey: "StarID"});

  return {
    Cities,
    Counties,
    Customers,
    HotelTypes,
    Hotels,
    Prices,
    Reservations,
    RoomDetails,
    RoomTypes,
    Stars,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
