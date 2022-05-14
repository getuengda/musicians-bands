const {sequelize, Sequelize, Model, DataTypes} = require('./db');

// TODO - define the Musician model
let Musician = sequelize.define('musician', {
        name: Sequelize.STRING,
        instrumnet: Sequelize.STRING,
    });

module.exports = {
    Musician
};