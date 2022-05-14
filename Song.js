
const {sequelize, Sequelize, Model, DataTypes} = require('./db');

// TODO - define the Band model

let Song = sequelize.define('song', {
        name: Sequelize.STRING,
        song: Sequelize.ENUM('Tizita', 'Anchihoyie', 'Baty'),
        // showCount: Sequelize.INTIGER
    });


module.exports = {
    Song
};