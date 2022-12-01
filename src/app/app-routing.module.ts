import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@features/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from '@features/layouts/auth-layout/auth-layout.component';
import { NavigationLayout, RoutePath } from '@core/values';

const routes: Routes = [
  { path: '', redirectTo: `/${RoutePath.HOME}`, pathMatch: 'full' },
  {
    path: `${NavigationLayout.MAIN}`,
    component: MainLayoutComponent,
    children: [
      {
        path: RoutePath.HOME,
        title: 'Home',
        loadChildren: () => import('@features/pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: RoutePath.MOVIES,
        title: 'Movie',
        loadChildren: () =>
          import('@features/pages/movies/movies.module').then((m) => m.MoviesModule),
      },
      {
        path: RoutePath.SERIES,
        title: 'Series',
        loadChildren: () =>
          import('@features/pages/series/series.module').then((m) => m.SeriesModule),
      },
      {
        path: RoutePath.PROFILE,
        title: 'Profile',
        loadChildren: () =>
          import('@features/pages/profile/profile.module').then((m) => m.ProfileModule),
      },
    ],
  },
  {
    path: `${NavigationLayout.AUTH}`,
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: `/auth/${RoutePath.SIGN_IN}`, pathMatch: 'full' },
      {
        path: RoutePath.SIGN_IN,
        title: 'Sign In',
        loadChildren: () =>
          import('@features/pages/sign-in/sign-in.module').then((m) => m.SignInModule),
      },
      {
        path: RoutePath.SIGN_UP,
        title: 'Sign Up',
        loadChildren: () =>
          import('@features/pages/sign-up/sign-up.module').then((m) => m.SignUpModule),
      },
      {
        path: RoutePath.RESET_PASSWORD,
        title: 'Reset Password',
        loadChildren: () =>
          import('@features/pages/reset-password/reset-password.module').then(
            (m) => m.ResetPasswordModule,
          ),
      },
      {
        path: RoutePath.CONFIRM,
        title: 'Confirm action page',
        loadChildren: () =>
          import('@features/pages/confirm/confirm.module').then((m) => m.ConfirmModule),
      },
    ],
  },
  {
    path: '**',
    title: 'Page not found',
    loadChildren: () =>
      import('./features/pages/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
