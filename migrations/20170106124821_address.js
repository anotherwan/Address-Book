
exports.up = function(knex, Promise) {
  return Promise.all ([
    knex.schema.createTable('address', (table) => {
      table.increments('id').primary().unsigned();
      table.integer('unit_number');
      table.integer('street_number').notNullable();
      table.string('street_name').notNullable();
      table.string('city').notNullable();
      table.string('province').notNullable();
      table.string('postal_code').notNullable();
    })
  ])
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('address')
}
