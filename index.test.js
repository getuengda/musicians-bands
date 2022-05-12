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

    test('Bands have multiple band', async () => {
        const testBand = await Band.create({
            name: 'Son of Moo',
            band: 'Hip Pop'
        })
        expect(testBand.band).toBe('Hip Hop');
    })

    test('Bands can update name', async () => {
        const testBand = await Band.update({
            name: 'Son of Chaa',
            band: 'R & B'
        })
        expect(testBand.name).toBe('Son of Chaa');
    })
    test('Bands can Delete bnad', async () => {
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
        
        const testMusician = await Musician.create({name: 'Sami Dan', instrument: 'Mesenko'})
        expect(Musician.instrument).toBe('Mesenko');
    })

    test('Bands can have many musician', async () => {
        
        const testMusician = await Musician.create({
            name: 'YKL', 
            band: 'Mesenko'
        })

        const Tedyafro = await Musician.create({name: 'Tedyafro', instrumnet: 'Vocals'})
        const SamMagna = await Musician.create({name: 'SamMagna', instrument: 'Guitar'})
        const TedyMac = await Musician.create({name: 'TedyMac', instrument: 'Piano'})

        await YKL.addMusician(Tedyafro) // AddMusician  is a magic Method to add 
        await YKL.addMusician(SamMagna)
        await YKL.addMusician(TedyMac)

        const musician = await YKL.getMusician()
        
        expect(musician.length).toBe(3);
        expect(musician[0] instanceof Musician).toBeTruthy;
    })
})