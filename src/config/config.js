require("dotenv").config();

module.exports = {
  development: {
    username: process.env.sqlUsername,
    password: process.env.sqlPassword,
    database: "Hotel",
    host: process.env.sqlServerName,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: false,
      },
    },
  },
  test: {
    username: process.env.sqlUsername,
    password: process.env.sqlPassword,
    database: "Hotel",
    host: process.env.sqlServerName,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: false,
      },
    },
  },
  production: {
    username: process.env.sqlUsername,
    password: process.env.sqlPassword,
    database: "Hotel",
    host: process.env.sqlServerName,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: false,
      },
    },
  },
};
