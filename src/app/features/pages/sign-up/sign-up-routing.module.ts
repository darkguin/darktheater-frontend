import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { CommonGuard } from '@core/guards/common.guard';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
    canActivate: [CommonGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}
