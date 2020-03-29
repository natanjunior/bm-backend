exports.up = function (knex) {
	return knex.schema.createTable('cartas', function (table) {
		table.string('codigo', 20).primary();
		table.string('lado_a', 100).notNullable();
		table.string('lado_b', 100).notNullable();
		table.string('baralhos_codigo', 20);

		table.foreign('baralhos_codigo').references('codigo').inTable('baralhos');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('cartas');
};