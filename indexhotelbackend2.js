//Requires ExpressJs Framework
const express = require("express");
const bodyParser = require("body-parser");

//Include Route Files
const contentRoutes = require("./src/routes/ContentRoutes");

//enviroment variables
require("dotenv").config();

//Express Framework
const app = express();
var path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Start Listening Port
port = "8081";
var server = app.listen(port, function () {
  console.log("Server is running ..");
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", contentRoutes);

//Catch the broken Links
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + "not found" });
});
