
exports.up = function(knex) {
    return knex.schema.createTable('teste', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
            })
};

exports.down = function(knex) {
    return knex.schema.dropTable('teste');
};
