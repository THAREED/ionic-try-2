import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreeningHelper2PageRoutingModule } from './screening-helper2-routing.module';

import { ScreeningHelper2Page } from './screening-helper2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreeningHelper2PageRoutingModule
  ],
  declarations: [ScreeningHelper2Page]
})
export class ScreeningHelper2PageModule {}
