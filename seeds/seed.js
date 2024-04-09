//import sequelize
const sequelize = require('../config/connection');
//import user model for seeding database with that model
const { User } = require('../models/user');
//import JSON seed user data
const userData = require('./userData.json');
//import Dog model for seeding database with that model
const { Dog } = require('../models/dog');
//import JSON seed dog data
const dogData = require('./dogData.json');
//create async function to seed the user data into the database using sequelize and the User model
const seedUser = async () => {
  await sequelize.sync({ force: true });
//creates user instances based on User model an userData seeds
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};
//calls seedUser function
seedUser();

//creates async function to seed the dog data into the database
const seedDog = async () => {
    await sequelize.sync({ force: true });
  //creates instances of Dog model with dogData seeds
    await Dog.bulkCreate(dogData);
  
    process.exit(0);
  };

  //calls seedDog function
  seedDog();

