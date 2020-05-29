import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreeningHelper2Page } from './screening-helper2.page';

const routes: Routes = [
  {
    path: '',
    component: ScreeningHelper2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreeningHelper2PageRoutingModule {}
