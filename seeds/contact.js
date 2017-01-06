
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contact').del()
    .then(function (rows) {
      return Promise.all([
        knex.table('contact').insert({
          first_name:'Helen',
          last_name: 'L',
          email: 'hl@example.com',
          phone_number_id: rows[0]
        })
      ]);
    });
};
