import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson14Page } from './lesson14.page';

const routes: Routes = [
  {
    path: '',
    component: Lesson14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson14PageRoutingModule {}
