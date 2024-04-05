// add allerigeis
// meds
// illness
// physical disabillity
// blind/deaf
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Special extends Model {};

Special.init({
  dog_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Dog',
      key: 'id',
    },
  },
  special_need: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
},
{sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Special',
    },
);

module.exports = Special
