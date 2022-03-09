var Content = require("../dao/Content");
const jwt = require("jsonwebtoken");
const mySecretKey = "alican";

//City
exports.getCityList = function (req, res) {
  Content.getCityList(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//County
exports.getCountyList = function (req, res) {
  Content.getCountyList(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//Room Type
exports.getRoomTypeList = function (req, res) {
  Content.getRoomTypeList(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//BU SATIRLARI HENÜZ ÇEVİRMEDİM

//Hotel
exports.getHotelList = function (req, res) {
  Content.getHotelList(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//Stars
exports.getStarList = function (req, res) {
  Content.getStarList(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//Price
exports.getPriceList = function (req, res) {
  Content.getPriceList(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//Login
exports.postLogin = function (req, res) {
  Content.postLogin(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//Sample JWT
// exports.sample = function (req, res) {
//   const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;
//   Content.sample(function (err, data) {
//     jwt.verify(myJwt, mySecretKey, (error, decoded) => {
//       if (error) {
//         var returnVal = {
//           result: "Failed",
//           message: "Authentication Failed",
//         };
//         res.send(returnVal);
//       } else {
//         console.log(decoded);
//         res.send(data);
//       }
//     });
//     if (err) console.log(err);
//     else res.send(data);
//   }, req.body);
// };
