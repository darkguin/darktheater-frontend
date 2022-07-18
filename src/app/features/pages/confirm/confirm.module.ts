import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConfirmComponent } from './confirm.component';
import { ConfirmRoutingModule } from './confirm-routing.module';
import { AuthModule } from '@features/auth';

@NgModule({
  declarations: [ConfirmComponent],
  imports: [
    CommonModule,
    ConfirmRoutingModule,
    AuthModule,
  ],
})
export class ConfirmModule {}
