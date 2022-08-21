import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { CommonGuard } from '@core/guards/common.guard';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    canActivate: [CommonGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInRoutingModule {}
