import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AvatarComponent } from './avatar.component';
import { AvatarPipe } from './pipes/avatar.pipe';

@NgModule({
  declarations: [AvatarPipe, AvatarComponent],
  imports: [CommonModule],
  exports: [AvatarComponent],
})
export class AvatarModule {}
