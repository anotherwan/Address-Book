exports.up = function(knex, Promise) {
  return Promise.all ([
    knex.schema.createTable('phone_number', (table) => {
      table.increments('id').primary().unsigned();
      table.string('main').notNullable();
      table.string('secondary');
      table.string('tertiary');
      table.string('other');
    })
  ])
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('phone_number')
};
