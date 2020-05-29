import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseRulePage } from './case-rule.page';

const routes: Routes = [
  {
    path: '',
    component: CaseRulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseRulePageRoutingModule {}
