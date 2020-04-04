const connection = require('../database/connection');

tamanhoRodada = 2;
partida = undefined;
rodada = undefined;

function initMatriz(tamanho) {
    let matriz = new Map();

    for (let index = 0; index < tamanho; index++) {
        matriz.set(index, {
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
    let acertou = rodada.every(slot => slot.carta.valor === rodada[0].carta.valor);
    //let cartasAlteradas = Object.assign({}, rodada);
    let cartasAlteradas = [...rodada];

    if (acertou)
        cartasAlteradas.forEach(slot => slot.carta = alteraEstadoCarta(slot.carta, 2));
    else
        cartasAlteradas.forEach(slot => slot.carta = alteraEstadoCarta(slot.carta, 0));

    rodada = []; console.log(">>> verificaRodada ", cartasAlteradas);
    return cartasAlteradas;
}

module.exports = {

    startGame() {

        rodada = [];
        let matriz  = initMatriz(12);

        partida = {
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
            "matriz": matriz
        };
        let partidaResponse = Object.assign({}, partida);
        partidaResponse.matriz = JSON.stringify([...matriz]);
        return partidaResponse;
    },

    selectCard(playerId, slotKey) {

        let slot = {
            chave: slotKey
        };

        slot.carta = partida.matriz.get(slotKey);
        
        if(slot.carta == undefined || slot.carta.estado != 0)
            return slot; // TODO retornar algum estado para indicar que não deve fazer nada

        if (rodada.length < tamanhoRodada) {
            addCarta(slot);
            slot.carta = alteraEstadoCarta(slot.carta, 1);
        }
        console.log(">>> selectCard ", slot);
        return slot;
    },

    verifyRound(playerId) {
        if (rodada.length == tamanhoRodada)
            return verificaRodada();
    }
};