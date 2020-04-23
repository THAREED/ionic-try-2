import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ambiguous0Page } from './ambiguous0.page';

const routes: Routes = [
  {
    path: '',
    component: Ambiguous0Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ambiguous0PageRoutingModule {}
