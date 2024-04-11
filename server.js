const models = require('./models');
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

// Configure and link a session object with the sequelize store
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Add express-session and store as Express.js middleware
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//start the server listening:
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server now listening ${PORT}`));
  });