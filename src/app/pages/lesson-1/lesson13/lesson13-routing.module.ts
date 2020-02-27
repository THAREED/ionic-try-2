import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson13Page } from './lesson13.page';

const routes: Routes = [
  {
    path: '',
    component: Lesson13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson13PageRoutingModule {}
