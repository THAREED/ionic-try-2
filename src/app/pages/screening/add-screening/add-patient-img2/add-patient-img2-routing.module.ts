import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPatientImg2Page } from './add-patient-img2.page';

const routes: Routes = [
  {
    path: '',
    component: AddPatientImg2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPatientImg2PageRoutingModule {}
