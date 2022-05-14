
const {sequelize, Sequelize, Model, DataTypes} = require('./db');

// TODO - define the Band model

let Song = sequelize.define('song', {
        name: Sequelize.STRING,
        song: Sequelize.STRING,
        showCount: Sequelize.INTEGER
    });


module.exports = {
    Song
};