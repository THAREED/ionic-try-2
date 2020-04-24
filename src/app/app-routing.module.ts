import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
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
    path: 'lesson11/:lesson', 
    loadChildren: () => import('./pages/lesson-1/lesson11/lesson11.module').then( m => m.Lesson11PageModule)
  },
  {
    path: 'lesson12/:lesson',
    loadChildren: () => import('./pages/lesson-1/lesson12/lesson12.module').then( m => m.Lesson12PageModule)
  },
  {
    path: 'lesson14/:lesson',
    loadChildren: () => import('./pages/lesson-1/lesson14/lesson14.module').then( m => m.Lesson14PageModule)
  },
  {
    path: 'lesson21/:lesson',
    loadChildren: () => import('./pages/lesson-1/lesson21/lesson21.module').then( m => m.Lesson21PageModule)
  },
  {
    path: 'lesson31/:lesson',
    loadChildren: () => import('./pages/lesson-1/lesson31/lesson31.module').then( m => m.Lesson31PageModule)
  },
  {
    path: 'ambiguous0/:lesson',
    loadChildren: () => import('./pages/lesson-1/ambiguous0/ambiguous0.module').then( m => m.Ambiguous0PageModule)
  },
  {
    path: 'ambiguous1/:lesson',
    loadChildren: () => import('./pages/lesson-1/ambiguous1/ambiguous1.module').then( m => m.Ambiguous1PageModule)
  },
  {
    path: 'ambiguous2/:lesson',
    loadChildren: () => import('./pages/lesson-1/ambiguous2/ambiguous2.module').then( m => m.Ambiguous2PageModule)
  },
  {
    path: 'ex1',
    loadChildren: () => import('./pages/exercises/exercise/ex1/ex1.module').then( m => m.Ex1PageModule)
  },
  {
    path: 'ex1-score',
    loadChildren: () => import('./pages/exercises/exercise/ex1-score/ex1-score.module').then( m => m.Ex1ScorePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
