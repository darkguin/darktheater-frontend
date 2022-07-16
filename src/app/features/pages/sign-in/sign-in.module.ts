import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
  ],
})
export class SignInModule {}
