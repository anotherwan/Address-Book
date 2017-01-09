exports.up = function(knex, Promise) {
  return Promise.all([knex.schema.createTable('contact', (table) => {
    table.increments('id').primary().unsigned();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.string('main_phone_number').notNullable();
    table.integer('unit_number');
    table.integer('street_number').notNullable();
    table.string('street_name').notNullable();
    table.string('city').notNullable();
    table.string('province').notNullable();
    table.string('postal_code').notNullable();
  })]);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contact');
};
