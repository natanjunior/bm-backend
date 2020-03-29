const connection = require('../database/connection');
module.exports = {
    async get(request, response) {
        const id = request.params.id;

        const auxPartida = await connection('partidas')
            .join('cartas', 'cartas.baralhos_codigo', '=', 'partidas.baralhos_codigo')
            .select(['partidas.*',
                'cartas.codigo',
                'cartas.lado_a',
                'cartas.lado_b'
            ])
            .where('id', id);

        const partida = auxPartida.reduce((acumulador, elemento) => {
            acumulador.id = elemento.id;
            acumulador.codigo_baralho = elemento.baralhos_codigo;

            if (acumulador.cartas == undefined)
                acumulador.cartas = [];

                acumulador.cartas.push({
                    codigo: elemento.codigo,
                    lado_a: elemento.lado_a,
                    lado_b: elemento.lado_b
                })
            return acumulador;
        }, {});

        return response.json(partida);
    }
};