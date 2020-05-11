import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCasePageRoutingModule } from './edit-case-routing.module';

import { EditCasePage } from './edit-case.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCasePageRoutingModule
  ],
  declarations: [EditCasePage]
})
export class EditCasePageModule {}
