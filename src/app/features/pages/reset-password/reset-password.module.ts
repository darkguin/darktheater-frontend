import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResetPasswordComponent } from './reset-password.component';
import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@shared/components/text-field/text-field.module';
import { AuthModule } from '@features/auth';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    ReactiveFormsModule,
    TextFieldModule,
    AuthModule,
  ],
})
export class ResetPasswordModule {}
