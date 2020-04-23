import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ambiguous1Page } from './ambiguous1.page';

const routes: Routes = [
  {
    path: '',
    component: Ambiguous1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ambiguous1PageRoutingModule {}
