const connection = require('../database/connection');

tamanhoRodada = 2;
rodada = undefined;

function initMatriz(tamanho) {
    let matriz = [];
    for (let index = 0; index < tamanho; index++) {
        matriz.push({
            id: index,
            estado: 0,
            valor: Math.floor((index + 2) / 2)
        });
    }
    return matriz;
}

function addCarta(carta) {
    if (rodada == undefined)
        rodada = [];

    rodada.push(carta);
}

function alteraEstadoCarta(carta, estado) {
    carta.estado = estado;
    return carta;
}

function verificaRodada() {
    var acertou = rodada.every(carta => carta.valor === rodada[0].valor);

    cartasAlteradas = rodada;

    if (acertou)
        cartasAlteradas.forEach(carta => carta = alteraEstadoCarta(carta, 2));
    else
        cartasAlteradas.forEach(carta => carta = alteraEstadoCarta(carta, 0));

    rodada = [];
    return cartasAlteradas;
}

module.exports = {

    startGame() {

        rodada = [];

        return {
            "id": 1,
            "codigo_baralho": "br_teste",
            "cartas": [{
                    "codigo": "cr_t_1",
                    "lado_a": "1",
                    "lado_b": "um"
                },
                {
                    "codigo": "cr_t_2",
                    "lado_a": "2",
                    "lado_b": "dois"
                },
                {
                    "codigo": "cr_t_3",
                    "lado_a": "3",
                    "lado_b": "tres"
                },
                {
                    "codigo": "cr_t_4",
                    "lado_a": "4",
                    "lado_b": "quatro"
                },
                {
                    "codigo": "cr_t_5",
                    "lado_a": "5",
                    "lado_b": "cinco"
                },
                {
                    "codigo": "cr_t_6",
                    "lado_a": "6",
                    "lado_b": "seis"
                }
            ],
            "matriz": initMatriz(12)
        };
    },

    selectCard(playerId, card) {

        carta = card;

        if (card.estado != 0)
            return carta; // TODO retornar algum estado para indicar que não deve fazer nada

        if (rodada.length < tamanhoRodada) {
            addCarta(carta);
            carta = alteraEstadoCarta(carta, 1);
        }

        return carta;
    },

    verifyRound(playerId){
        if (rodada.length == tamanhoRodada)
            return verificaRodada();
    }
};