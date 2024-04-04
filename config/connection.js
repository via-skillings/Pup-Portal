//import sequelize package
const Sequelize = require('sequelize')
//import dotenv package to allow use of environment variables
require('dotenv').config();
//initialize sequelize
let sequelize;

// if using heroku JAWSDB, then use heroku/jawsdb environment variables else use local environment variables
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
      }
    );
  }
  //export sequelize to use elsewhere in other folders
  module.exports = sequelize;