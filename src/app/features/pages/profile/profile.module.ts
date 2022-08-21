import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileCoverComponent } from './components/profile-cover/profile-cover.component';
import { AvatarModule } from '@shared/components/avatar';
import { IconModule } from '@shared/components/icon';

@NgModule({
  declarations: [ProfileComponent, ProfileCoverComponent],
  imports: [CommonModule, ProfileRoutingModule, AvatarModule, IconModule],
})
export class ProfileModule {}
