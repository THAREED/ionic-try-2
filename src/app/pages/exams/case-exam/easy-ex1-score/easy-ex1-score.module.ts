import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasyEx1ScorePageRoutingModule } from './easy-ex1-score-routing.module';

import { EasyEx1ScorePage } from './easy-ex1-score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasyEx1ScorePageRoutingModule
  ],
  declarations: [EasyEx1ScorePage]
})
export class EasyEx1ScorePageModule {}
