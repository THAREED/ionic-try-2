import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson15PageRoutingModule } from './lesson15-routing.module';

import { Lesson15Page } from './lesson15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lesson15PageRoutingModule
  ],
  declarations: [Lesson15Page]
})
export class Lesson15PageModule {}
