// good w/ dogs
// good w/ cat
// kids
// crate trained
// potty trained
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create class to ref in line 12
class Traits extends Model {};



Traits.init (
    {
        dog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Dog',
                key: 'id'
            }
        },
        trait: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Traits',
    },
);

module.exports = Traits;