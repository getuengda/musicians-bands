const {sequelize, Sequelize, Model, DataTypes} = require('./db');

// TODO - define the Band model

let Band = sequelize.define('band', {
    name: Sequelize.STRING,
    genre: Sequelize.ENUM('Rock', 'Pop', 'Hip hop', 'R & B')
    // showCount: Sequelize.Number
});

module.exports = {
    Band
};