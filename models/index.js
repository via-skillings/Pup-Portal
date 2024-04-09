const User = require('./user');
const Dog = require('./dog');
// const Traits = require('./traits');
// const Special = require('./special');

//commented out user traits an special needs model associations since those tables/features are removed from this release of the app -VG

// Dog.hasMany(Traits, {
//     foreignKey: 'dog_id'
//   });
//   Traits.belongsTo(Dog);

//   Dog.hasMany(Special, {
//     foreignKey: 'dog_id'
//   });
//   Special.belongsTo(Dog);

module.exports = { User, Dog };


