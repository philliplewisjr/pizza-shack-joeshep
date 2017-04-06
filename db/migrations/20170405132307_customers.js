exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("users", (table)=>{
    table.increments()
    table.string("user_email").notNullable()
    table.string("user_password").notNullable()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable("users")
};
