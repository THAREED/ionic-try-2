import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson13PageRoutingModule } from './lesson13-routing.module';

import { Lesson13Page } from './lesson13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lesson13PageRoutingModule
  ],
  declarations: [Lesson13Page]
})
export class Lesson13PageModule {}
