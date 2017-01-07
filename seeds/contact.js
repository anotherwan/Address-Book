
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contact').del()
    .then(function () {
      return Promise.all([
        knex.table('contact').insert({
          first_name:'Helen',
          last_name: 'L',
          email: 'hl@example.com'
        }),
        knex.table('contact').insert({
          phone_number_id:
          (knex.select('id').from('phone_number')).into('contact')
        })
      ])
  })
};
