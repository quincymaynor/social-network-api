const connection = require('../config/connection');
const {  } = require('../models');
const {  } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let dbCheck1 = await connection.db.listCollections({ name: '' }).toArray();
    if (dbCheck1.length) {
      await connection.dropCollection('');
    }

    let dbCheck2 = await connection.db.listCollections({ name: '' }).toArray();
    if (dbCheck2.length) {
      await connection.dropCollection('');
    }


  // // Create empty array to hold the students
  // const students = [];

  // // Loop 20 times -- add students to the students array
  // for (let i = 0; i < 20; i++) {
  //   // Get some random assignment objects using a helper function that we imported from ./data
  //   const assignments = getRandomAssignments(20);

  //   const fullName = getRandomName();
  //   const first = fullName.split(' ')[0];
  //   const last = fullName.split(' ')[1];
  //   const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

  //   students.push({
  //     first,
  //     last,
  //     github,
  //     assignments,
  //   });
  // }

  // // Add students to the collection and await the results
  // await Student.collection.insertMany(students);

  // // Add courses to the collection and await the results
  // await Course.collection.insertOne({
  //   courseName: 'UCLA',
  //   inPerson: false,
  //   students: [...students],
  // });

  // Log out the seed data to indicate what should appear in the database
  console.table();
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
