import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'game-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() carta;

    constructor() { }

    ngOnInit(): void {

    }

    ngAfterContentChecked() {

        if (this.carta.estado == 0)
            this.alteraClasse('game__card--down');
        else if (this.carta.estado == 1)
            this.alteraClasse('game__card--up');
        if (this.carta.estado == 2)
            this.alteraClasse('game__card--no-show');
    }

    private alteraClasse(classe) {
        this.carta.classe = classe;
    }
}
