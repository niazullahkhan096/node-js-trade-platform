const config = require("./../config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.database.DB, 
    config.database.USER, 
    config.database.PASSWORD, {
  host: config.database.HOST,
  dialect: config.database.dialect,
  operatorsAliases: false,

  pool: {
    max: config.database.pool.max,
    min: config.database.pool.min,
    acquire: config.database.pool.acquire,
    idle: config.database.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;