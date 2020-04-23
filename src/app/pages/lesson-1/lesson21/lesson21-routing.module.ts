import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson21Page } from './lesson21.page';

const routes: Routes = [
  {
    path: '',
    component: Lesson21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson21PageRoutingModule {}
