import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex1ScorePageRoutingModule } from './ex1-score-routing.module';

import { Ex1ScorePage } from './ex1-score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex1ScorePageRoutingModule
  ],
  declarations: [Ex1ScorePage]
})
export class Ex1ScorePageModule {}
