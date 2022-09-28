import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigationBarComponent } from './navigation-bar.component';
import { IconModule } from '@shared/components/icon/icon.module';
import { NavbarLogoComponent } from './components/navbar-logo/navbar-logo.component';
import { SizeControlComponent } from './components/size-control/size-control.component';

@NgModule({
  declarations: [NavigationBarComponent, NavbarLogoComponent, SizeControlComponent],
  imports: [CommonModule, IconModule],
  exports: [NavigationBarComponent],
})
export class NavigationBarModule {}
