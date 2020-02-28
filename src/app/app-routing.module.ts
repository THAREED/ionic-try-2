import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  // { path: '', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  // { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  // { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  // // Redirect to tab-routing.module
  // { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard]},
  // { path: 'lesson', loadChildren: './pages/lessons/lessons.module#LessonsPageModule' },
  // { path: 'exercise', loadChildren: './pages/exercises/exercises.module#ExercisesPageModule' },
  // { path: 'exam', loadChildren: './pages/exams/exams.module#ExamsPageModule' },
  // { path: 'screening', loadChildren: './pages/screening/screening.module#ScreeningPageModule' },

  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  // Redirect to tab-routing.module
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'lesson', loadChildren: './pages/lessons/lessons.module#LessonsPageModule' },
  { path: 'exercise', loadChildren: './pages/exercises/exercises.module#ExercisesPageModule' },
  { path: 'exam', loadChildren: './pages/exams/exams.module#ExamsPageModule' },
  { path: 'screening', loadChildren: './pages/screening/screening.module#ScreeningPageModule' },
  {
    path: 'lesson11',
    loadChildren: () => import('./pages/lesson-1/lesson11/lesson11.module').then( m => m.Lesson11PageModule)
  },
  {
    path: 'lesson12',
    loadChildren: () => import('./pages/lesson-1/lesson12/lesson12.module').then( m => m.Lesson12PageModule)
  },
  {
    path: 'lesson13',
    loadChildren: () => import('./pages/lesson-1/lesson13/lesson13.module').then( m => m.Lesson13PageModule)
  },  {
    path: 'lesson14',
    loadChildren: () => import('./pages/lesson-1/lesson14/lesson14.module').then( m => m.Lesson14PageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
