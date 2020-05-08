import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPatientImgPageRoutingModule } from './add-patient-img-routing.module';

import { AddPatientImgPage } from './add-patient-img.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPatientImgPageRoutingModule
  ],
  declarations: [AddPatientImgPage]
})
export class AddPatientImgPageModule {}
