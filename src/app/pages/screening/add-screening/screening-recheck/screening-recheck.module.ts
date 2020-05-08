import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreeningRecheckPageRoutingModule } from './screening-recheck-routing.module';

import { ScreeningRecheckPage } from './screening-recheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreeningRecheckPageRoutingModule
  ],
  declarations: [ScreeningRecheckPage]
})
export class ScreeningRecheckPageModule {}
