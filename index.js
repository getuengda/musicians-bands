const {Band} = require('./Band')
const {Musician} = require('./Musician')

const sequelize = new Sequelize( {
    dialect: 'sqlite',
    storage: './db.sqlite'
})

module.exports = {
    Band,
    Musician
};
