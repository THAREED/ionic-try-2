import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreeningRecheckPage } from './screening-recheck.page';

const routes: Routes = [
  {
    path: '',
    component: ScreeningRecheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreeningRecheckPageRoutingModule {}
