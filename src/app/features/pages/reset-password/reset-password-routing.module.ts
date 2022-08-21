import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password.component';
import { CommonGuard } from '@core/guards/common.guard';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent,
    canActivate: [CommonGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordRoutingModule {}
