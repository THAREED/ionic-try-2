import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasyExRulePage } from './easy-ex-rule.page';

const routes: Routes = [
  {
    path: '',
    component: EasyExRulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasyExRulePageRoutingModule {}
