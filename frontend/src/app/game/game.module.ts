import { MatchService } from './match.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchComponent } from './match/match.component';
import { CardComponent } from '../card/card.component';

@NgModule({
    declarations: [
        MatchComponent,
        CardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MatchComponent
    ],
    providers: [
        MatchService
    ]
})
export class GameModule { }
