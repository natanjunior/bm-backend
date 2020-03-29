import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

    tamanho: number;
    cartas: string[];

  constructor() {
    this.cartas = [];
        for (let i = 0; i < 16; i++) {
            this.cartas.push("carta " + i);   
        }
      console.log(this.cartas);
   }

  ngOnInit(): void {
      
  }

}
