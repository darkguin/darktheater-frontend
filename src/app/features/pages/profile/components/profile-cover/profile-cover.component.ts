import { Component, Input } from '@angular/core';
import { AppInfo } from '@core/values';

@Component({
  selector: 'profile-cover, [profile-cover]',
  templateUrl: './profile-cover.component.html',
  styleUrls: ['./profile-cover.component.scss'],
})
export class ProfileCoverComponent {
  @Input() src = '';
  AppInfo = AppInfo;

  get backgroundImage() {
    return `url(${this.src || AppInfo.defaultProfileCover})`;
  }
}
