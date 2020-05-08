import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreeningHelperPageRoutingModule } from './screening-helper-routing.module';

import { ScreeningHelperPage } from './screening-helper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreeningHelperPageRoutingModule
  ],
  declarations: [ScreeningHelperPage]
})
export class ScreeningHelperPageModule {}
