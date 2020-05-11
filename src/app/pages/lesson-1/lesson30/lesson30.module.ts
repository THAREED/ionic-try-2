import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson30PageRoutingModule } from './lesson30-routing.module';

import { Lesson30Page } from './lesson30.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lesson30PageRoutingModule
  ],
  declarations: [Lesson30Page]
})
export class Lesson30PageModule {}
