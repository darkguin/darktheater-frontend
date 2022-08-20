import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigationBarComponent } from './navigation-bar.component';
import { IconModule } from '@shared/components/icon/icon.module';

@NgModule({
  declarations: [NavigationBarComponent],
  imports: [CommonModule, IconModule],
  exports: [NavigationBarComponent],
})
export class NavigationBarModule {}
