import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConfirmComponent } from './confirm.component';
import { ConfirmRoutingModule } from './confirm-routing.module';
import { AuthModule } from '@features/auth';
import { ConfirmGuard } from '@features/pages/confirm/guards/confirm.guard';

@NgModule({
  declarations: [ConfirmComponent],
  providers: [ConfirmGuard],
  imports: [CommonModule, ConfirmRoutingModule, AuthModule],
})
export class ConfirmModule {}
