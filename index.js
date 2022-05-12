const {sequelize, DataTypes, Model} = require('./db');

const {Band} = require('./Band')
const {Musician} = require('./Musician')

const sequelize = new Sequelize( {
    dialect: 'sqlite',
    storage: './db.sqlite'
})

//Create our Association!
Musician.belongsTo(Band) //adds a foreign key on the musician table, for the band they belong to
Band.hasMany(Musician) //gives us Sequelize magic methods


module.exports = {
    Band,
    Musician
};
