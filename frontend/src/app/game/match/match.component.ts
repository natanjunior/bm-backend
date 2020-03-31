import { MatchService } from './../match.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-match',
    templateUrl: './match.component.html',
    styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

    tamanhoRodada: number = 2;

    partida;
    rodada;

    constructor(private matchService: MatchService) {

        this.partida = matchService.getPartida(1);

        console.log(this.partida);

        this.rodada = [];
    }

    ngOnInit(): void { }

    selectCard(carta) {
        
        if (carta.estado != 0)
            return;

        if (this.rodada.length < this.tamanhoRodada) {
            this.addCarta(carta);
            this.alteraEstadoCarta(carta, 1);
        }

        if (this.rodada.length == this.tamanhoRodada)
            setTimeout(() => { this.verificaRodada() }, 1000);
    }

    private addCarta(carta) {
        if (this.rodada == undefined)
            this.rodada = [];

        this.rodada.push(carta);
    }

    private alteraEstadoCarta(carta, estado) {
        carta.estado = estado;
    }

    private verificaRodada() {
        var acertou = this.rodada.every(carta => carta.valor === this.rodada[0].valor);

        if (acertou)
            this.rodada.forEach(carta => this.alteraEstadoCarta(carta, 2));
        else
            this.rodada.forEach(carta => this.alteraEstadoCarta(carta, 0));

        this.rodada = [];
    }

}