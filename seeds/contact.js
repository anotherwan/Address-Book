
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('phone_number').del()
    .then(function () {
      return Promise.all([
        knex('phone_number').insert({
          main: '647-453-2435',
          secondary: '416-234-3664 ext.3',
          tertiary: '(647) 234-2345'
        }),
        knex('contact').insert({
          first_name:'Helen',
          last_name: 'L',
          email: 'hl@example.com'
        }),
        knex('address').insert({
          unit_number: 3,
          street_number: 280,
          street_name: 'Main St',
          city: 'Toronto',
          province: 'Ontario',
          postal_code: 'M3M 8M7'
        })
        // knex('contact_address').insert({
        //   contact_id: 1,
        //   address_id: 1
        // })
      ]);
    });
};
