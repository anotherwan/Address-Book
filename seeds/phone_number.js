
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('phone_number').del()
    .then(function () {
      return Promise.all([
        knex.table('phone_number').insert({
          primary: '647-453-2435',
          secondary: '416-234-3664 ext.3',
          tertiary: '(647) 234-2345'
        })
      ]);
    });
};
