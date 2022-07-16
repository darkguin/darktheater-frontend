import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmptyLayoutComponent } from './empty-layout.component';

@NgModule({
  declarations: [EmptyLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class EmptyLayoutModule {}
