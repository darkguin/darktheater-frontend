import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';

@NgModule({
  declarations: [AuthWrapperComponent],
  imports: [CommonModule],
  exports: [AuthWrapperComponent],
})
export class AuthModule {}
