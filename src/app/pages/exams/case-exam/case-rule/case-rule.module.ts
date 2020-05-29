import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaseRulePageRoutingModule } from './case-rule-routing.module';

import { CaseRulePage } from './case-rule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaseRulePageRoutingModule
  ],
  declarations: [CaseRulePage]
})
export class CaseRulePageModule {}
