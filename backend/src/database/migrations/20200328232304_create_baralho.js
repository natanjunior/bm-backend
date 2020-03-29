exports.up = function (knex) {
    return knex.schema.withSchema('public').createTable('baralho', function (table) {
        table.increments('id').primary();
        table.string('titulo', 100).notNullable();
        table.string('subtitulo', 100);
        table.text('descricao');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('baralho')
};