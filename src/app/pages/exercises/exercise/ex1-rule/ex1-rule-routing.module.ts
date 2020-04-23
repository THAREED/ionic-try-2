import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex1RulePage } from './ex1-rule.page';

const routes: Routes = [
  {
    path: '',
    component: Ex1RulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex1RulePageRoutingModule {}
