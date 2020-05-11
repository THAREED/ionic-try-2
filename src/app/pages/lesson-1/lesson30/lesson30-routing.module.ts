import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson30Page } from './lesson30.page';

const routes: Routes = [
  {
    path: '',
    component: Lesson30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson30PageRoutingModule {}
