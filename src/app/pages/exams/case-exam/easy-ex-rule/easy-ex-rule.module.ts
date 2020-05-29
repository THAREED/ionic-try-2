import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasyExRulePageRoutingModule } from './easy-ex-rule-routing.module';

import { EasyExRulePage } from './easy-ex-rule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasyExRulePageRoutingModule
  ],
  declarations: [EasyExRulePage]
})
export class EasyExRulePageModule {}
