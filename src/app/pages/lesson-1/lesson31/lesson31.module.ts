import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson31PageRoutingModule } from './lesson31-routing.module';

import { Lesson31Page } from './lesson31.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lesson31PageRoutingModule
  ],
  declarations: [Lesson31Page]
})
export class Lesson31PageModule {}
