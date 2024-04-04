//path is used for server reading/writing information, access directories
const path = require('path');
//imports express server
const express = require('express');
//imports express sessions for sessions/auth
const session = require('express-session');
//imports handelbars for creating views
const exphbs = require('express-handlebars');
//import controllers directory
const routes = require('./controllers');
//import helpers file from utils directory
const helpers = require('./utils/helpers');
//imoprt connection file from config folder
const sequelize = require('./config/connection');

//create sequelize store with express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//set up app and port for express server
const app = express();
const PORT = process.env.PORT || 3001;

//connects handlebars to helpers folder
const hbs = exphbs.create({ helpers });

// TO DO: configure and link session object with sequelize store
// TO DO: add additional middleware for express-session and store as express.js middleware