import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson34PageRoutingModule } from './lesson34-routing.module';

import { Lesson34Page } from './lesson34.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lesson34PageRoutingModule
  ],
  declarations: [Lesson34Page]
})
export class Lesson34PageModule {}
