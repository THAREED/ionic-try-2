import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'lesson',
        children: [
          {
            path: '',
            loadChildren: '../pages/lessons/lessons.module#LessonsPageModule'
          }
        ]
      },
      {
        path: 'exercise',
        children: [
          {
            path: '',
            loadChildren: '../pages/exercises/exercises.module#ExercisesPageModule'
          }
        ]
      },
      {
        path: 'exam',
        children: [
          {
            path: '',
            loadChildren: '../pages/exams/exams.module#ExamsPageModule'
          }
        ]
      },
      {
        path: 'screening',
        children: [
          {
            path: '',
            loadChildren: '../pages/screening/screening.module#ScreeningPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/lesson',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/tabs/lesson',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
