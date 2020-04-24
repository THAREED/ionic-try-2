import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex1ScorePage } from './ex1-score.page';

const routes: Routes = [
  {
    path: '',
    component: Ex1ScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex1ScorePageRoutingModule {}
