import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasyEx1ScorePage } from './easy-ex1-score.page';

const routes: Routes = [
  {
    path: '',
    component: EasyEx1ScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasyEx1ScorePageRoutingModule {}
