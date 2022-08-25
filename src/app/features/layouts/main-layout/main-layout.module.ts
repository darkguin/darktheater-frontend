import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout.component';
import { NavigationBarModule } from '@shared/components/navigation-bar/navigation-bar.module';
import { LoaderModule } from '@shared/components/loader/loader.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, RouterModule, NavigationBarModule, LoaderModule],
})
export class MainLayoutModule {}
