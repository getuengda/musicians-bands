const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const testBand = await Band.create({
            name: 'YKL'})
        expect(testBand.name).toBe('YKL');
    })

    test('Bands have a genre', async () => {
        const testBand = await Band.create({
            name: 'Son of Moo',
            genre: 'Hip Pop'
        })
        expect(testBand.genre).toBe('Hip Hop');
    })

    test('Bands can update name', async () => {
        const testBand = await Band.update({
            name: 'Son of Chaa',
            genre: 'R & B'
        })
        expect(testBand.name).toBe('Son of Chaa');
    })
    test('Bands can Delete genre', async () => {
        const testBand = await Band.destroy({
            name: 'Son of Chaa',
        })
        expect(testBand.name).toBe('');
    })

    test('can create a Musician', async () => {
        const testMusician = await Musician.create({
            name: 'Konu'})
        expect(Musician.name).toBe('Konu');
    })
    test('Musician can play insrument', async () => {
        
        const testMusician = await Musician.create({
            name: 'Sami Dan',
            instrument: 'Mesenko'})
        expect(Musician.instrument).toBe('Mesenko');
    })
})