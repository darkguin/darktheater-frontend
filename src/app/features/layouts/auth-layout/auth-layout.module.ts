import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './auth-layout.component';
import { AuthModule } from '@features/auth';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [CommonModule, RouterModule, AuthModule],
})
export class AuthLayoutModule {}
