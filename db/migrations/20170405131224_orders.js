
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("orders", (table)=>{
    table.increments()
    table.string("orders_name").notNullable()
    table.string("orders_email").notNullable()
    table.string("orders_phone").notNullable()
    table.string("orders_size").notNullable()
    table.specificType('toppings', knex.raw('text[]')).notNullable().defaultTo('{"cheese"}');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable("orders")
};
