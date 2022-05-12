const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
        // class Musician extends Model{

        // }
let Musician;
Musician.init({
    name: DataType.String,
    instrumnet: DataType.String
},{
    sequelize,
    timestamps: false
})

module.exports = {
    Musician
};