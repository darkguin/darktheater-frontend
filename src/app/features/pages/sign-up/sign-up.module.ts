import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@features/auth';

import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { TextFieldModule } from '@shared/components/text-field/text-field.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@shared/components/icon';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    AuthModule,
    TextFieldModule,
    ReactiveFormsModule,
    IconModule,
  ],
})
export class SignUpModule {}
