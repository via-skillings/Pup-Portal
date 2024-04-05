// add allerigeis
// meds
// illness
// physical disabillity
// blind/deaf
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Special extends Model {};

Special.init (
    {
        dog_idid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true,
            autoIncrement: true,
        },
        allerigeis: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        medication: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        illnesses: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        physicalDisability: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        blind: {
            type: DataTypes.BOOLEN,
            allowNull: false,
        },
        deaf: {
            type: DataTypes.BOOLEN,
            allowNull: false,
        },
    },
);

model.exports = Special