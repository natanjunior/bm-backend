exports.up = function (knex) {
	return knex.schema.createTable('partidas', function (table) {
		table.increments('id').primary();
		table.string('baralhos_codigo', 20);
		
		table.foreign('baralhos_codigo').references('codigo').inTable('baralhos');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('partidas');
};