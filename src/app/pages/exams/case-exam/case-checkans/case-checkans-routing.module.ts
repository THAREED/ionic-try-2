import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseCheckansPage } from './case-checkans.page';

const routes: Routes = [
  {
    path: '',
    component: CaseCheckansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseCheckansPageRoutingModule {}
