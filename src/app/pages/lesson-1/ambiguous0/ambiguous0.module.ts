import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ambiguous0PageRoutingModule } from './ambiguous0-routing.module';

import { Ambiguous0Page } from './ambiguous0.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ambiguous0PageRoutingModule
  ],
  declarations: [Ambiguous0Page]
})
export class Ambiguous0PageModule {}
