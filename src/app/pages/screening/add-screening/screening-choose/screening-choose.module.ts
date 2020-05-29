import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreeningChoosePageRoutingModule } from './screening-choose-routing.module';

import { ScreeningChoosePage } from './screening-choose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreeningChoosePageRoutingModule
  ],
  declarations: [ScreeningChoosePage]
})
export class ScreeningChoosePageModule {}
