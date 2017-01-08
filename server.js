'use strict'

const express = require('express');
const app = express();
const knex = require('knex');
const PORT = process.env.PORT || 3000;



app.set('view engine', 'ejs');
app.use(express.static("public"));

const contactEntryTable = [
  {
    id: 1,
    first_name: 'Joe',
    last_name: 'Bozo',
    email: 'joe@bozo.com'
  },
  {
    id: 2,
    first_name: 'Mary',
    last_name: 'Kate',
    email: 'm@k.com'
  }
];

const phoneNumberTable = [
  {
    id: 1,
    main: '647-987-6543',
    secondary: '416-987-6543',
    tertiary: '450-987-6543 ext.2',
    other: '514-987-6543'
  },
  {
    id: 2,
    main: '416-010-1010',
    secondary: '647-010-1010',
    tertiary: '514-010-1010'
  }

];

const addressEntryTable = [
    {
      id: 1,
      street_number: '420',
      street_name: 'Baker Rd',
      city: 'Toronto',
      province: 'Ontario',
      postal_code: 'M2M 2M2'
    },
    {
      id: 2,
      unit_number: '2',
      street_number: '468',
      street_name: 'Sunset Blvd',
      city: 'Montreal',
      province: 'Quebec',
      postal_code: 'H1H 1H1'
    }
];

const seedTestContact = [
    {
      id: 1,
      first_name: 'Joe',
      last_name: 'Bozo',
      email: 'joe@bozo.com',
      main: '647-987-6543',
      secondary: '416-987-6543',
      tertiary: '450-987-6543 ext.2',
      other: '514-987-6543',
      street_number: '420',
      street_name: 'Baker Rd',
      city: 'Toronto',
      province: 'Ontario',
      postal_code: 'M2M 2M2'
    },
    {
      id: 2,
      first_name: 'Mary',
      last_name: 'Kate',
      email: 'm@k.com',
      main: '416-010-1010',
      secondary: '647-010-1010',
      tertiary: '514-010-1010',
      unit_number: '2',
      street_number: '468',
      street_name: 'Sunset Blvd',
      city: 'Montreal',
      province: 'Quebec',
      postal_code: 'H1H 1H1'
    }
];

app.get('/contacts', (req, res) => {
  return res.render('home', { contact: seedTestContact} )
});

app.get('/contacts/new', (req, res) => {
  return res.render('add_contact', { })
});

app.post('/contacts/new', (req, res) => {
  return res.redirect('/')
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

// app.get('/contacts', (req, res) => {
//   knex('contact')
//     .select('*')
//     .then(contact => {
//       res.render('home', {
//         first_name: contact.first_name,
//         last_name: contact.last_name,
//         email: contact.email
//       });
//     })
// });

// get shit from db

// put in obj

// app.get('/contacts/:contactId', (req, res) => {
//   res.render('')
// })
//
