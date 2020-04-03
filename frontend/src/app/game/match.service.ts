import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Subject } from 'rxjs';

enum SituacaoCarta {
    DOWN,
    UP,
    OFF
};

@Injectable({
    providedIn: 'root'
})
export class MatchService {

    private emissor$ = new Subject();

    emitirValor(valor){
        this.emissor$.next(valor);
    }

    getValor(){
        this.emissor$.asObservable();
    }

    constructor(private socket: Socket) {}

    startGame(idBaralho){
        this.socket.emit('startGame', idBaralho);
    }

    getReturnStartGame() {
        return this.socket.fromEvent("startGame");
    }

    selectCard(card){
        this.socket.emit('selectCard', card);
    }

    getReturnSelectCard() {
        return this.socket.fromEvent("selectCard");
    }

    getReturnVerifyRound() {
        return this.socket.fromEvent("verifyRound");
    }

}
