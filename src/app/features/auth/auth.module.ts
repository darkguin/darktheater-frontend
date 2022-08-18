import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@shared/components/text-field/text-field.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthWrapperComponent, AuthFormComponent],
  imports: [CommonModule, ReactiveFormsModule, TextFieldModule, RouterModule],
  exports: [AuthWrapperComponent, AuthFormComponent],
})
export class AuthModule {}
