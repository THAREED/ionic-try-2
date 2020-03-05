import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson11PageRoutingModule } from './lesson11-routing.module';

import { Lesson11Page } from './lesson11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lesson11PageRoutingModule
  ],
  declarations: [Lesson11Page]
})
export class Lesson11PageModule {}
