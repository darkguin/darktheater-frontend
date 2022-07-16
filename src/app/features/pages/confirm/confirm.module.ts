import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConfirmComponent } from './confirm.component';
import { ConfirmRoutingModule } from './confirm-routing.module';

@NgModule({
  declarations: [ConfirmComponent],
  imports: [
    CommonModule,
    ConfirmRoutingModule,
  ],
})
export class ConfirmModule {}
