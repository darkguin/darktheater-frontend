import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@features/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from '@features/layouts/auth-layout/auth-layout.component';
import { NavigationLayout, NavigationPath } from '@core/values';

const routes: Routes = [
  { path: '', redirectTo: `/${NavigationPath.HOME}`, pathMatch: 'full' },
  {
    path: `${NavigationLayout.MAIN}`,
    component: MainLayoutComponent,
    children: [
      {
        path: NavigationPath.HOME,
        title: 'darktheater. Home',
        loadChildren: () => import('@features/pages/home/home.module').then(m => m.HomeModule),
      },
    ]
  },
  {
    path: `${NavigationLayout.AUTH}`,
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: `/auth/${NavigationPath.SIGN_IN}`, pathMatch: 'full' },
      {
        path: NavigationPath.SIGN_IN,
        title: 'darktheater. Sign In',
        loadChildren: () => import('@features/pages/sign-in/sign-in.module').then(m => m.SignInModule),
      },
      {
        path: NavigationPath.SIGN_UP,
        title: 'darktheater. Sign Up',
        loadChildren: () => import('@features/pages/sign-up/sign-up.module').then(m => m.SignUpModule),
      },
      {
        path: NavigationPath.RESET_PASSWORD,
        title: 'darktheater. Reset Password',
        loadChildren: () => import('@features/pages/reset-password/reset-password.module').then(m => m.ResetPasswordModule),
      },
      {
        path: NavigationPath.CONFIRM,
        title: 'darktheater. Confirm',
        loadChildren: () => import('@features/pages/confirm/confirm.module').then(m => m.ConfirmModule),
      },
    ]
  },
  {
    path: '**',
    title: 'darktheater. Not found',
    loadChildren: () => import('./features/pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
