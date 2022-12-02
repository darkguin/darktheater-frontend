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
        loadChildren: () => import('@features/pages/home/home.module'),
      },
      {
        path: RoutePath.CATALOG,
        title: 'Catalog',
        loadChildren: () => import('@features/pages/catalog/catalog.module'),
      },
      {
        path: RoutePath.MOVIES,
        title: 'Movie',
        loadChildren: () => import('@features/pages/movies/movies.module'),
      },
      {
        path: RoutePath.SERIES,
        title: 'Series',
        loadChildren: () => import('@features/pages/series/series.module'),
      },
      {
        path: RoutePath.PROFILE,
        title: 'Profile',
        loadChildren: () => import('@features/pages/profile/profile.module'),
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
        loadChildren: () => import('@features/pages/sign-in/sign-in.module'),
      },
      {
        path: RoutePath.SIGN_UP,
        title: 'Sign Up',
        loadChildren: () => import('@features/pages/sign-up/sign-up.module'),
      },
      {
        path: RoutePath.RESET_PASSWORD,
        title: 'Reset Password',
        loadChildren: () => import('@features/pages/reset-password/reset-password.module'),
      },
      {
        path: RoutePath.CONFIRM,
        title: 'Confirm action page',
        loadChildren: () => import('@features/pages/confirm/confirm.module'),
      },
    ],
  },
  {
    path: '**',
    title: 'Page not found',
    loadChildren: () => import('./features/pages/not-found/not-found.module'),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
