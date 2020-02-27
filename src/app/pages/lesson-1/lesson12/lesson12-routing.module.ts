import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson12Page } from './lesson12.page';

const routes: Routes = [
  {
    path: '',
    component: Lesson12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson12PageRoutingModule {}
