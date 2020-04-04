import { MatchService } from './../match.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-match',
    templateUrl: './match.component.html',
    styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

    tamanhoRodada: number = 2;

    partida = undefined;
    rodada;

    constructor(private matchService: MatchService) { }

    ngOnInit(): void {
        this.rodada = [];
        this.matchService.getReturnStartGame().subscribe(_partida => {
            this.partida = _partida;
            this.partida.matriz = new Map(JSON.parse(this.partida.matriz));
            console.log("partida", this.partida);
        });
        this.matchService.getReturnSelectCard().subscribe((_response: any) => {
            console.log("selectCard_response", _response);
            this.updateCarta(_response.chave, _response.carta);
        });
        this.matchService.getReturnVerifyRound().subscribe(_response => {
            console.log("verifyRound_response", _response);
            this.updateRodada(_response);
        });
    }

    selectCard(carta) {
        if (carta.value.estado != 0)
            return;
        this.matchService.selectCard(carta.key);
    }

    startGame() {
        this.matchService.startGame("br_teste");
    }

    updateCarta(chave, carta) {
        if (chave == undefined || carta == undefined || this.partida.matriz.get(chave) == undefined)
            return;

        this.partida.matriz.set(chave, carta);
    }

    updateRodada(rodada) {
        rodada.map(slot => {
            this.updateCarta(slot.chave, slot.carta);
        });
    }

}