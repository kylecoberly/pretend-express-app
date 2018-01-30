exports.up = function(knex, Promise) {
    return knex.schema.createTable("user", user => {
        user.increments();
        user.string("name");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("user");
};
