import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaseCheckansPageRoutingModule } from './case-checkans-routing.module';

import { CaseCheckansPage } from './case-checkans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaseCheckansPageRoutingModule
  ],
  declarations: [CaseCheckansPage]
})
export class CaseCheckansPageModule {}
