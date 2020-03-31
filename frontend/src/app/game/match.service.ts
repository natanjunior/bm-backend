import { Injectable } from '@angular/core';

enum SituacaoCarta {
    DOWN,
    UP,
    OFF
};

@Injectable({
    providedIn: 'root'
})
export class MatchService {

    constructor() { }

    getPartida(idPartida) {
        return {
            "id": 1,
            "codigo_baralho": "br_teste",
            "cartas": [
                {
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
            "matriz": this.initMatriz(12)
        };


    }

    initMatriz(tamanho: Number) {
        let matriz = [];
        for (let index = 0; index < tamanho; index++) {
            matriz.push({
                id: index,
                estado: 0,
                valor: Math.floor((index+2)/2)
            });
        }
        return matriz;
    }

}
