require("dotenv").config();
const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.js")[env];
const jwt = require("jsonwebtoken");
const mySecretKey = "alican";

const sequelize = new Sequelize(
  "Hotel",
  process.env.sqlUsername,
  process.env.sqlPassword,
  config
);

const initModels = require("../models/init-models");
const Model = initModels(sequelize);

//City
exports.getCityList = async function (callback) {
  var FUNCTIONNAME = "getCityList";

  var sqlStatement = `
    SELECT CityID,CityName
    FROM Cities
    ORDER BY CityID
          `;
  try {
    const result = await Model.Cities.findAll({
      attributes: ["CityID", "CityName"],
      order: [["CityID", "ASC"]],
    });
    var returnVal = {
      result: "İşlem Başarılı!",
      message: "",
      cityTable: result,
    };
  } catch (err) {
    console.log(err);
    var returnVal = {
      result: "İşlem Başarılı!",
      message: "",
      cityTable: err,
    };
  }

  callback(null, returnVal);
};
//Counties
exports.getCountyList = async function (callback) {
  var FUNCTIONNAME = "getCountyList";

  var sqlStatement = `
    SELECT CountyID,CountyName, CityID
    FROM Counties
    ORDER BY CountyName
          `;

  try {
    const result = await Model.Counties.findAll({
      attributes: ["CountyID", "CountyName", "CityID"],
      order: [["CountyName", "ASC"]],
    });
    var returnVal = {
      result: "İşlem Başarılı!",
      message: "",
      countyTable: result,
    };
  } catch (err) {
    console.log(err);
    var returnVal = {
      result: "Failed",
      message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
      data: null,
    };
  }

  callback(null, returnVal);
};
//Room Type
exports.getRoomTypeList = async function (callback) {
  var FUNCTIONNAME = "getRoomTypeList";

  var sqlStatement = `
    SELECT RoomTypeID,RoomTypeName
    FROM RoomTypes
    ORDER BY RoomTypeID
            `;

  try {
    const result = await Model.RoomTypes.findAll({
      attributes: ["RoomTypeID", "RoomTypeName"],
      order: [["RoomTypeID", "ASC"]],
    });
    var returnVal = {
      result: "İşlem Başarılı!",
      message: "",
      roomTypeTable: result,
    };
  } catch (err) {
    var returnVal = {
      result: "Failed",
      message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
      data: err,
    };
  }

  callback(null, returnVal);
};

//Hotel
exports.getHotelList = async function (callback) {
  var FUNCTIONNAME = "getHotelList";

  try {
    const result = await sequelize.query(`
    SELECT h.HotelID,h.HotelName,s.StarName,ht.HotelTypeName,c.CountyName,ci.CityName,h.HotelImage,CONVERT(varchar,h.CreationDate,100) as CreationDate
    FROM Hotels h
    LEFT JOIN Counties c ON c.CountyID = h.CountyID
    LEFT JOIN HotelTypes ht ON ht.HotelTypeID = h.HotelTypeID
    LEFT JOIN Stars s ON s.StarID = h.StarID
    LEFT JOIN Cities ci ON ci.CityID = c.CityID
    ORDER BY s.StarID DESC, h.HotelName
                `);
    var returnVal = {
      result: "İşlem Başarılı!",
      message: "",
      hotelTable: result[0],
    };
  } catch (err) {
    var returnVal = {
      result: "Failed",
      message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
      data: null,
    };
  }
  callback(null, returnVal);
};
//Prices
exports.getPriceList = async function (callback) {
  var FUNCTIONNAME = "getPriceList";

  try {
    const result = await sequelize.query(`
    SELECT p.PriceID,h.HotelName,ht.HotelTypeName,s.StarName,rt.RoomTypeName,co.CountyName,ci.CityName,p.StartDate,p.EndDate,p.Price,h.HotelImage,h.HotelID
    FROM Prices p
    LEFT JOIN RoomDetails rd ON p.RoomDetailID = rd.RoomDetailID
    LEFT JOIN Hotels h ON h.HotelID = rd.HotelID
    LEFT JOIN RoomTypes rt ON rt.RoomTypeID = rd.RoomTypeID
    LEFT JOIN Counties co ON co.CountyID = h.CountyID
    LEFT JOIN Cities ci ON ci.CityID = co.CityID
    LEFT JOIN Stars s ON h.StarID = s.StarID
    LEFT JOIN HotelTypes ht ON h.HotelTypeID = ht.HotelTypeID
    WHERE GETDATE() BETWEEN p.StartDate AND p.EndDate
    ORDER BY p.Price ASC,h.HotelName,s.StarID DESC
                `);
    var returnVal = {
      result: "İşlem Başarılı!",
      message: "",
      priceTable: result[0],
    };
  } catch (err) {
    var returnVal = {
      result: "Failed",
      message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
      data: null,
    };
  }
  callback(null, returnVal);
};
//Stars
exports.getStarList = async function (callback) {
  var FUNCTIONNAME = "getStarList";

  try {
    const result = await sequelize.query(
      `
    SELECT StarID,StarName
    FROM Stars
    ORDER BY StarID DESC
                  `
    );
    var returnVal = {
      result: "İşlem Başarılı!",
      message: "",
      starTable: result[0],
    };
    console.log(result);
  } catch (err) {
    var returnVal = {
      result: "Failed",
      message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
      data: null,
    };
  }
  callback(null, returnVal);
};

//Login
exports.postLogin = async function (callback) {
  const serviceparameters = arguments[1];
  try {
    const result = await sequelize.findAll({
      attributes: ["email", "password"],
      where: {
        email: serviceparameters.email,
        password: serviceparameters.password,
      },
    });
    if (result != undefined) {
      const myData = {
        emailAddress: serviceparameters.email,
      };
      let jwtToken = jwt.sign(myData, mySecretKey, { expiresIn: "1800s" });
      var returnVal = {
        Result: "İşlem Başarılı!",
        Message: "",
        Jwt: jwtToken,
      };
    } else {
      var returnVal = {
        Result: "Failed / invalid User",
        Message: "",
        Jwt: null,
      };
    }
  } catch (err) {
    var returnVal = {
      result: "Failed",
      message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
      data: null,
    };
  }
  callback(null, returnVal);
};
