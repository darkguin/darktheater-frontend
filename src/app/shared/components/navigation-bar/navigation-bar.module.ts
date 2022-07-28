import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigationBarComponent } from './navigation-bar.component';
import { NavBarService } from './services/nav-bar.service';
import { IconModule } from '@shared/components/icon/icon.module';

@NgModule({
  declarations: [NavigationBarComponent],
  imports: [CommonModule, IconModule],
  providers: [NavBarService],
  exports: [NavigationBarComponent],
})
export class NavigationBarModule {}
