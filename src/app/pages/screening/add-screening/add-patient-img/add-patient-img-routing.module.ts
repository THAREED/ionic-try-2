import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPatientImgPage } from './add-patient-img.page';

const routes: Routes = [
  {
    path: '',
    component: AddPatientImgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPatientImgPageRoutingModule {}
