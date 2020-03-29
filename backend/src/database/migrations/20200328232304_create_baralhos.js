exports.up = function (knex) {
	return knex.schema.createTable('baralhos', function (table) {
		table.string('codigo', 20).primary();
		table.string('titulo', 100).notNullable();
		table.text('descricao');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('baralhos');
};