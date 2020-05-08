import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson15Page } from './lesson15.page';

const routes: Routes = [
  {
    path: '',
    component: Lesson15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson15PageRoutingModule {}
