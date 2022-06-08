const { Sequelize } = require("sequelize");

const db = new Sequelize("behapp-db", "postgres", "pinkfloyd10", {
  host: "localhost",
  dialect: "postgres",
  logging:false

});

module.exports = db;
