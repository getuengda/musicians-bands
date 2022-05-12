const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model
    // class Band extends Model{
        
    // }

let Band;
Band.init({
    name: DataType.String,
    genre: DataType.ENUM('Rock', 'Pop', 'Hip hop', 'R & B'),
    showCount: DataType.Number
},{
    sequelize
});

module.exports = {
    Band
};