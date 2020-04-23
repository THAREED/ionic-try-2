import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ambiguous2PageRoutingModule } from './ambiguous2-routing.module';

import { Ambiguous2Page } from './ambiguous2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ambiguous2PageRoutingModule
  ],
  declarations: [Ambiguous2Page]
})
export class Ambiguous2PageModule {}
