import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreeningHelperPage } from './screening-helper.page';

const routes: Routes = [
  {
    path: '',
    component: ScreeningHelperPage
  },
  {
    path: 'screening-helper2',
    loadChildren: () => import('./screening-helper2/screening-helper2.module').then( m => m.ScreeningHelper2PageModule)
  },
  {
    path: 'screening-helper2',
    loadChildren: () => import('./screening-helper2/screening-helper2.module').then( m => m.ScreeningHelper2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreeningHelperPageRoutingModule {}
