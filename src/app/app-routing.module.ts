import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'landing', loadChildren: './auth/login/login.module#LoginPageModule' },

  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  // Redirect to tab-routing.module
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard]},
  // { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}