import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileCoverComponent } from './components/profile-cover/profile-cover.component';
import { AvatarModule } from '@shared/components/avatar';
import { IconModule } from '@shared/components/icon';
import { LoaderModule } from '@shared/components/loader/loader.module';
import { LoadingService } from '@core/services';
import { PageWrapperModule } from '@shared/components/page-wrapper/page-wrapper.module';

@NgModule({
  declarations: [ProfileComponent, ProfileCoverComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AvatarModule,
    IconModule,
    LoaderModule,
    PageWrapperModule,
  ],
  providers: [LoadingService],
})
export class ProfileModule {}
