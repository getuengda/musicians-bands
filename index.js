const {sequelize, Sequelize, Model, DataTypes} = require('./db');

const { Band } = require('./Band')
const { Musician } = require('./Musician');
const { Song } = require('./Song');


//Create our Association!
Musician.belongsTo(Band) //adds a foreign key on the musician table, for the band they belong to
Band.hasMany(Musician) //gives us Sequelize magic methods

//Create many-to-Many Association!
//Multiple songs can be added to a Band
//Multiple bands can have the same Song
Band.belongsTo(Song) //adds a foreign key on the Band table, for the band they belong to
Song.hasMany(Band) //gives us Sequelize magic methods

Song.belongsToMany(Band, {through: "song_band"});
Band.belongsToMany(Song, {through: "song_band"});


module.exports = {
    Band,
    Musician,
    Song
};
