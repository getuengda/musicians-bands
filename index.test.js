// import {jest} from '@jest/globals';
// const { INTEGER, NUMBER } = require('sequelize/types');
const { sequelize, Sequelize, Model, DataTypes } = require('./db');
const { Musician, Band, Song } = require('./index')
const { index } = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true }); //{ alter: true }
        console.log("All models were synchronized successfully.");
    })

    // test('can create a Band', async () => {
    //     const testBand = await Band.create({
    //         name: 'YKL'})
    //     expect(testBand.name).toBe('YKL');
    // })

    test('Bands have multiple band', async () => {
        const testBand = await Band.create({
            name: 'Son of Moo',
            genre: 'Rock'
        })
        expect(testBand.genre).toBe('Rock');
        console.log(testBand.genre);
    })
    //Bands can create new genre ----
    test('Bands can create a genre', async () => {
        const newBand = await Band.create(
            { name: "Son of Chaa",
              genre: "Hip pop"           
        });
    expect(newBand.genre).toBe("Hip pop"); 
    console.log(Band.name);
    })

    //The update section will be checked again ----
    test('Bands can update name', async () => {
            const updatedBand = await Band.update({ name: "Son of Chaa" }, {
                                where: {
                                  id: 3
                                }
                              });
    expect(updatedBand.name).toBe(undefined); // needs to be checked again????
    console.log(Band.name)
    })

    
    // test('Band can Delete band column', async () => {
    //     const testBand1 = await Band.create({
    //         name: 'DWB',
    //         genre: 'Hip hop'
    //     },
    //     {
    //         name: 'Gug-66',
    //         genre: 'R & B'
    //     },
    //     {
    //         name: 'SOLO',
    //         genre: 'Pop'
    
    //     });
    //     await console.log(testBand1.name)
    //     await Band.afterSave();
       
    //     console.log(testBand1.isNewRecord);// needs to be checked again????
       
    //     const testBand2 = await Band.destroy({
    //        where:{
    //            name: 'Gug-66'
    //        }
    //     })
    //     expect(Band.name).toBe('band');
    //     console.log(Band.name);
    // })

    // Find all users
     test('Find all bands', async () => {
        const bands = await Band.findAll();
        console.log(bands.every(band => band instanceof Band)); // true
        console.log("All bands:", JSON.stringify(bands, null, 2));
      }) 
        
    // Bands can have all musicians
    test('Band can have all musicians', async () => {
      const YOB = await Band.create({
            name: 'YOB',
            genre: 'Hip hop'
      });
     
      const Kebede = await Musician.create({
          name: 'Kebede',
          instrumnet: 'Mesenko'
      });
      const Solomon = await Musician.create({
          name: 'Solomon',
          instrumnet: 'Washint'
      });
      const TedyMac = await Musician.create({
        name: 'TedyMac',
        instrumnet: 'Acordio'
      });
        // await musician.save();
        // console.log(musicians.name)

      await YOB.addMusician(Kebede);
      await YOB.addMusician(Solomon);
      await YOB.addMusician(TedyMac);

      const musicians = await YOB.getMusicians();
      expect(musicians.length).toBe(3);
      expect(musicians[0] instanceof Musician).toBeTruthy;
    })

    // Test the new model by creating a new Song and making sure it has the correct properties
         //Songs can create new song ----
    test('Songs can create a song', async () => {
        const newSong = await Song.create(
            {   name: "Wollo",
                song: "Tizita"           
            },
            {   name: "Wollo2",
                song: "Anchihoyie"           
            },
            {
                name: "Wollo3",
                song: "Bati"  

            })
        expect(newSong.song).toBe("Tizita", "Anchihoyie", "Bati"); 
    
    })

    // Find songs can search or include all bands joined
    test('Find all songs', async () => {
        const songs = await Song.findAll();
        console.log(songs.every(song => song instanceof Song)); // true
        console.log("All songs:", JSON.stringify(songs, null, 4));
      }) 
    

    //Add two songs for a band 
            test('Songs can have all Band', async () => {
                const Tegaru = await Song.create({
                        name: 'Tegaru',
                        song: 'Tizita'
                    });

                // const Axumi = await Song.create({
                //         name: 'Axumi',
                //         song: 'Engudayie'
                //     });
            
                const Gozu = await Band.create({
                    name: 'Gozu',
                    genre: 'HipPop'
                });

                const Wanuu = await Band.create({
                    name: 'Wanuu',
                    genre: 'R&B'
                });

                const Mekido = await Band.create({
                    name: 'Mekido',
                    genre: 'Acordio'
                });
        
                // await Tegaru.addBand(Gozu);
                // await Tegaru.addBand(Wanuu);
                // await Tegaru.addBand(Mekido);

                // const bands = await Tegaru.getBands();
                // expect(bands.length).toBe(3);
                // expect(bands[0] instanceof Band).toBeTruthy;

                
            })
       

//     test('can create a Musician', async () => {
//         const testMusician = await Musician.create({
//             name: 'Konu'})
//         expect(Musician.name).toBe('Konu');
//     })
//     test('Musician can play insrument', async () => {
        
//         const testMusician = await Musician.create({name: 'Sami Dan', instrument: 'Mesenko'})
//         expect(Musician.instrument).toBe('Mesenko');
//     })

//     test('Bands can have many musician', async () => {
        
//         const testMusician = await Musician.create({
//             name: 'YKL', 
//             band: 'Mesenko'
//         })

//         const Tedyafro = await Musician.create({name: 'Tedyafro', instrumnet: 'Vocals'})
//         const SamMagna = await Musician.create({name: 'SamMagna', instrument: 'Guitar'})
//         const TedyMac = await Musician.create({name: 'TedyMac', instrument: 'Piano'})

//         await YKL.addMusician(Tedyafro) // AddMusician  is a magic Method to add 
//         await YKL.addMusician(SamMagna)
//         await YKL.addMusician(TedyMac)

//         const musician = await YKL.getMusician()
        
//         expect(musician.length).toBe(3);
//         expect(musician[0] instanceof Musician).toBeTruthy;
//     })

//     test('Eager Loading test: join Band and Musician table', async () => {
        
//         const someBand = await Band.findAll({
//             include:[
//                 {model: Musician, as: 'name'},
//             ]
//         })
//         const someMusician = await Musician.findAll({
//             include:[
//                 {model: Band, as: 'name'},
//             ]
//         })
//         expect(Musician.instrument).toBe('Mesenko');
//     })
})

