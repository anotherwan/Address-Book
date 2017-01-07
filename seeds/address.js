
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('address').del()
    .then(function () {
      return Promise.all([
        knex.table('address').insert({
          unit_number: 3,
          street_number: 280,
          street_name: 'Main St',
          city: 'Toronto',
          province: 'Ontario',
          postal_code: 'M3M 8M7'
        })
      ]);
    });
};
