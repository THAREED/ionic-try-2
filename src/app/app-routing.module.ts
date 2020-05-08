import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  // Redirect to tab-routing.module
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard]},
  { path: 'lesson', loadChildren: './pages/lessons/lessons.module#LessonsPageModule' },
  { path: 'exercise', loadChildren: './pages/exercises/exercises.module#ExercisesPageModule' },
  { path: 'exam', loadChildren: './pages/exams/exams.module#ExamsPageModule' },
  { path: 'screening', loadChildren: './pages/screening/screening.module#ScreeningPageModule' },
  {
    path: 'lesson11/:id/:lesson',
    loadChildren: () => import('./pages/lesson-1/lesson11/lesson11.module').then( m => m.Lesson11PageModule)
  },
  {
    path: 'lesson12/:id/:lesson',
    loadChildren: () => import('./pages/lesson-1/lesson12/lesson12.module').then( m => m.Lesson12PageModule)
  },
  {
    path: 'lesson21/:id/:lesson',
    loadChildren: () => import('./pages/lesson-1/lesson21/lesson21.module').then( m => m.Lesson21PageModule)
  },
  {
    path: 'lesson31/:id/:lesson',
    loadChildren: () => import('./pages/lesson-1/lesson31/lesson31.module').then( m => m.Lesson31PageModule)
  },
  {
    path: 'ambiguous0/:id/:lesson',
    loadChildren: () => import('./pages/lesson-1/ambiguous0/ambiguous0.module').then( m => m.Ambiguous0PageModule)
  },
  {
    path: 'ambiguous1/:id/:lesson',
    loadChildren: () => import('./pages/lesson-1/ambiguous1/ambiguous1.module').then( m => m.Ambiguous1PageModule)
  },
  {
    path: 'ambiguous2/:id/:lesson',
    loadChildren: () => import('./pages/lesson-1/ambiguous2/ambiguous2.module').then( m => m.Ambiguous2PageModule)
  },
  {
    path: 'ex1/:id/:lesson',
    loadChildren: () => import('./pages/exercises/exercise/ex1/ex1.module').then( m => m.Ex1PageModule)
  },
  {
    path: 'ex1-score',
    loadChildren: () => import('./pages/exercises/exercise/ex1-score/ex1-score.module').then( m => m.Ex1ScorePageModule)
  },
  {
    path: 'lesson14/:id/:lesson',
    loadChildren: () => import('./pages/lesson-1/lesson14/lesson14.module').then( m => m.Lesson14PageModule)
  },
  {
    path: 'lesson24/:id/:lesson',
    loadChildren: () => import('./pages/lesson-1/lesson24/lesson24.module').then( m => m.Lesson24PageModule)
  },
  {
    path: 'lesson34/:id/:lesson',
    loadChildren: () => import('./pages/lesson-1/lesson34/lesson34.module').then( m => m.Lesson34PageModule)
  },
  {
    path: 'case-ex1',
    loadChildren: () => import('./pages/exams/case-exam/case-ex1/case-ex1.module').then( m => m.CaseEx1PageModule)
  },
  {
    path: 'case-checkans',
    loadChildren: () => import('./pages/exams/case-exam/case-checkans/case-checkans.module').then( m => m.CaseCheckansPageModule)
  },
  {
    path: 'patient-list',
    loadChildren: () => import('./pages/screening/patient/patient-list/patient-list.module').then( m => m.PatientListPageModule)
  },
  {
    path: 'add-patient',
    loadChildren: () => import('./pages/screening/add-screening/add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'add-patient-img',
    loadChildren: () => import('./pages/screening/add-screening/add-patient-img/add-patient-img.module').then( m => m.AddPatientImgPageModule)
  },
  {
    path: 'add-patient-img2',
    loadChildren: () => import('./pages/screening/add-screening/add-patient-img2/add-patient-img2.module').then( m => m.AddPatientImg2PageModule)
  },
  {
    path: 'screening-step1',
    loadChildren: () => import('./pages/screening/add-screening/screening-step1/screening-step1.module').then( m => m.ScreeningStep1PageModule)
  },
  {
    path: 'screening-helper',
    loadChildren: () => import('./pages/screening/add-screening/screening-helper/screening-helper.module').then( m => m.ScreeningHelperPageModule)
  },
  {
    path: 'screening-recheck',
    loadChildren: () => import('./pages/screening/add-screening/screening-recheck/screening-recheck.module').then( m => m.ScreeningRecheckPageModule)
  },
  {
    path: 'lesson13',
    loadChildren: () => import('./pages/lesson-1/lesson13/lesson13.module').then( m => m.Lesson13PageModule)
  },
  {
    path: 'lesson15',
    loadChildren: () => import('./pages/lesson-1/lesson15/lesson15.module').then( m => m.Lesson15PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
