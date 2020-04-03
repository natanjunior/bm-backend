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
            console.log("partida", this.partida);
        });
        this.matchService.getReturnSelectCard().subscribe(_response => {
            console.log("_response", _response);
        });
        this.matchService.getReturnVerifyRound().subscribe(_response => {
            console.log("_response", _response);
        });
    }

    selectCard(carta) {
        if (carta.estado != 0)
            return;
        console.log(carta);
        this.matchService.selectCard(carta);
    }

    startGame(){
        this.matchService.startGame("br_teste");
    }

}