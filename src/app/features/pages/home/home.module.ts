import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeSidebarComponent } from './components/home-sidebar/home-sidebar.component';

import { TextFieldModule } from '@shared/components/text-field';
import { AvatarModule } from '@shared/components/avatar';
import { IconModule } from '@shared/components/icon';
import { PageWrapperModule } from '@shared/components/page-wrapper';
import { CardViewComponent } from '@shared/components/card-view';
import { CardModule } from '@shared/components/card';
import { RemoveHostDirective } from '@shared/directives/remove-host';
import { SliderModule } from '@shared/components/slider';

@NgModule({
  declarations: [HomeComponent, HomeSidebarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TextFieldModule,
    AvatarModule,
    IconModule,
    PageWrapperModule,
    SliderModule,
    CardViewComponent,
    CardModule,
    RemoveHostDirective,
  ],
})
export default class HomeModule {}
