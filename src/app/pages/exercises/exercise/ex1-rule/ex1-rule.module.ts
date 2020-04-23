import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex1RulePageRoutingModule } from './ex1-rule-routing.module';

import { Ex1RulePage } from './ex1-rule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex1RulePageRoutingModule
  ],
  declarations: [Ex1RulePage]
})
export class Ex1RulePageModule {}
