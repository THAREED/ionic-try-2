import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson12PageRoutingModule } from './lesson12-routing.module';

import { Lesson12Page } from './lesson12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lesson12PageRoutingModule
  ],
  declarations: [Lesson12Page]
})
export class Lesson12PageModule {}
