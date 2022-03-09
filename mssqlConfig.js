require("dotenv").config();

const mssqlConfig = {
  user: process.env.sqlUsername,
  password: process.env.sqlPassword,
  server: process.env.sqlServerName.toString(),
  database: "Hotel",
  options: {
    port: parseInt(process.env.sqlPort),
    encrypt: false,
  },
  pool: {
    max: 20,
    min: 5,
    idleTimeoutMillis: 150000,
  },
};

module.exports = mssqlConfig;
