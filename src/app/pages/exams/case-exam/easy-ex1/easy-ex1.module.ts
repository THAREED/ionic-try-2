import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasyEx1PageRoutingModule } from './easy-ex1-routing.module';

import { EasyEx1Page } from './easy-ex1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasyEx1PageRoutingModule
  ],
  declarations: [EasyEx1Page]
})
export class EasyEx1PageModule {}
