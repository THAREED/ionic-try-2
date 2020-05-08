import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreeningStep1Page } from './screening-step1.page';

const routes: Routes = [
  {
    path: '',
    component: ScreeningStep1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreeningStep1PageRoutingModule {}
