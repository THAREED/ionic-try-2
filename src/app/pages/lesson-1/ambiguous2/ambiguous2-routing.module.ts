import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ambiguous2Page } from './ambiguous2.page';

const routes: Routes = [
  {
    path: '',
    component: Ambiguous2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ambiguous2PageRoutingModule {}
