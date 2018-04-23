
exports.up = function(knex, Promise) {

    return knex.schema.createTable('users', function(table) {
        table.increments(),     // primary key - auto increment
        table.string('name'),   // user name
        table.string('email')
    });
  
};

exports.down = function(knex, Promise) {
  
    return knex.schema.dropTable('users');
};
