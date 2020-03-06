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

  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  // Redirect to tab-routing.module
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'lesson', loadChildren: './pages/lessons/lessons.module#LessonsPageModule' },
  { path: 'exercise', loadChildren: './pages/exercises/exercises.module#ExercisesPageModule' },
  { path: 'exam', loadChildren: './pages/exams/exams.module#ExamsPageModule' },
  { path: 'screening', loadChildren: './pages/screening/screening.module#ScreeningPageModule' },
  { path: 'lesson11', loadChildren: './pages/lesson-1/lesson11/lesson11.module' },
  { path: 'lesson12', loadChildren: './pages/lesson-1/lesson12/lesson12.module' },
  { path: 'lesson13', loadChildren: './pages/lesson-1/lesson13/lesson13.module' },
  { path: 'lesson14', loadChildren: './pages/lesson-1/lesson14/lesson14.module' },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
