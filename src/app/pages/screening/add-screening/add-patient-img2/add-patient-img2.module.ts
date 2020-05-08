import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPatientImg2PageRoutingModule } from './add-patient-img2-routing.module';

import { AddPatientImg2Page } from './add-patient-img2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPatientImg2PageRoutingModule
  ],
  declarations: [AddPatientImg2Page]
})
export class AddPatientImg2PageModule {}
