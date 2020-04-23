import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ambiguous1PageRoutingModule } from './ambiguous1-routing.module';

import { Ambiguous1Page } from './ambiguous1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ambiguous1PageRoutingModule
  ],
  declarations: [Ambiguous1Page]
})
export class Ambiguous1PageModule {}
