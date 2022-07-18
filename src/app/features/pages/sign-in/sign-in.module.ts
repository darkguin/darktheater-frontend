import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@features/auth';

import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { TextFieldModule } from '@shared/components/text-field/text-field.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    AuthModule,
    TextFieldModule,
    ReactiveFormsModule,
  ],
})
export class SignInModule {}
