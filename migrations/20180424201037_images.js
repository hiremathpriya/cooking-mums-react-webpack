
exports.up = function(knex, Promise) {
    return knex.schema.createTable('images', function(table) {
        table.increments(),     // primary key - auto increment
        table.string('imgname')   // user name
        // table.string('email')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('images');
};
