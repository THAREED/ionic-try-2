import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaseEx1PageRoutingModule } from './case-ex1-routing.module';

import { CaseEx1Page } from './case-ex1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaseEx1PageRoutingModule
  ],
  declarations: [CaseEx1Page]
})
export class CaseEx1PageModule {}
