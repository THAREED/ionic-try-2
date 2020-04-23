import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson21PageRoutingModule } from './lesson21-routing.module';

import { Lesson21Page } from './lesson21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lesson21PageRoutingModule
  ],
  declarations: [Lesson21Page]
})
export class Lesson21PageModule {}
