
exports.up = function(knex, Promise) {
  return Promise.all ([
    knex.schema.createTable('contact_address', (table) => {
      table.integer('contact_id').unsigned().references('id').inTable('contact').notNullable();
      table.integer('address_id').unsigned().references('id').inTable('address').notNullable();
    })
  ])
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contact_address')
}
