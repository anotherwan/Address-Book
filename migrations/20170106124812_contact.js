
exports.up = function(knex, Promise) {
  return Promise.all ([
    knex.schema.createTable('contact', (table) => {
      table.increments('id').primary().unsigned();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable();
      table.integer('phone_number_id').unsigned().references('phone_number.id').notNullable();
    })
  ])
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contact')
}
