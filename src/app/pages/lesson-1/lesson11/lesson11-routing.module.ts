import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson11Page } from './lesson11.page';

const routes: Routes = [
  {
    path: '',
    component: Lesson11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson11PageRoutingModule {}
