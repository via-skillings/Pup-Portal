// good w/ dogs
// good w/ cat
// kids
// crate trained
// potty trained
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create class to ref in line 12
class Traits extends Model {};



Traits.init (
    {
        dog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true,
            autoIncrement: true,
        },
        goodDogs: {
            type: DataTypes.BOOLEN,
            allowNull: false,
        },
        goodCats: {
            type: DataTypes.BOOLEN,
            allowNull: false,
        },
        goodKids: {
            type: DataTypes.BOOLEN,
            allowNull: false,
        },
        crateTrained: {
            type: DataTypes.BOOLEN,
            allowNull: false,
        },
        pottyTrained: {
            type: DataTypes.BOOLEN,
            allowNull: false,
        },
    },
);

model.exports = Traits;