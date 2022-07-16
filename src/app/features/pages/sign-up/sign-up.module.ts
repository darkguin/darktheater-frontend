import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
  ],
})
export class SignUpModule {}
