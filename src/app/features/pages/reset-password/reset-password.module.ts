import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResetPasswordComponent } from './reset-password.component';
import { ResetPasswordRoutingModule } from './reset-password-routing.module';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
  ],
})
export class ResetPasswordModule {}
