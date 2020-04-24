import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson34Page } from './lesson34.page';

const routes: Routes = [
  {
    path: '',
    component: Lesson34Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson34PageRoutingModule {}
