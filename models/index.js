const User = require('./user');
const Dog = require('./dog');
const Traits = require('./traits');
const Special = require('./special');


Dog.hasMany(Traits, {
    foreignKey: 'dog_id'
  });
  Traits.belongsTo(Dog);

  Dog.hasMany(Special, {
    foreignKey: 'dog_id'
  });
  Special.belongsTo(Dog);

module.exports = { User, Dog, Traits, Special };


