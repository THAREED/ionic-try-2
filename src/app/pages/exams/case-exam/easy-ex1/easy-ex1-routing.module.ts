import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasyEx1Page } from './easy-ex1.page';

const routes: Routes = [
  {
    path: '',
    component: EasyEx1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasyEx1PageRoutingModule {}
