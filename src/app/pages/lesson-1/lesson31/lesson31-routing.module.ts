import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson31Page } from './lesson31.page';

const routes: Routes = [
  {
    path: '',
    component: Lesson31Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson31PageRoutingModule {}
