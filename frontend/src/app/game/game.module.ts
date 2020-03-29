import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchComponent } from './match/match.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [   
    MatchComponent, 
    BoardComponent,
    CardComponent
],
  imports: [
    CommonModule
  ],
  exports: [
    MatchComponent
  ]
})
export class GameModule { }
