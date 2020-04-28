import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseEx1Page } from './case-ex1.page';

const routes: Routes = [
  {
    path: '',
    component: CaseEx1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseEx1PageRoutingModule {}
