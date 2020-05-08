import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreeningStep1PageRoutingModule } from './screening-step1-routing.module';

import { ScreeningStep1Page } from './screening-step1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreeningStep1PageRoutingModule
  ],
  declarations: [ScreeningStep1Page]
})
export class ScreeningStep1PageModule {}
