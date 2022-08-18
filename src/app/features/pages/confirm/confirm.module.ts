import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthModule } from '@features/auth';
import { ConfirmGuard } from './guards/confirm.guard';
import { ConfirmComponent } from './confirm.component';
import { ConfirmRoutingModule } from './confirm-routing.module';
import { ConfirmationService } from './services/confirmation.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@shared/components/text-field/text-field.module';

@NgModule({
  declarations: [ConfirmComponent],
  providers: [ConfirmGuard, ConfirmationService],
  imports: [CommonModule, ConfirmRoutingModule, AuthModule, ReactiveFormsModule, TextFieldModule],
})
export class ConfirmModule {}
