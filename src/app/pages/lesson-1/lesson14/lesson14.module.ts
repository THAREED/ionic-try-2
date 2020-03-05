import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson14PageRoutingModule } from './lesson14-routing.module';

import { Lesson14Page } from './lesson14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lesson14PageRoutingModule
  ],
  declarations: [Lesson14Page]
})
export class Lesson14PageModule {}
