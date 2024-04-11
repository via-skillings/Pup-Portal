// name
// age
// breed
// size
// weight
// sex 
// vaccinated
// spayed
// fee

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Dog extends Model {};

Dog.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vaccinated: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        spayed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fee: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'dog',
        }
);

module.exports = Dog;