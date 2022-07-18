import { Component, Input } from '@angular/core';
import { AppInfo, NavigationPath } from '@core/values';
import { NavigationFullPath } from '@core/values';

@Component({
  selector: 'auth-wrapper, [auth-wrapper]',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss'],
})
export class AuthWrapperComponent {
  @Input() title = '';
  @Input() subtitle = '';

  appInfo = AppInfo;

  get homePath() {
    return NavigationFullPath[NavigationPath.HOME];
  }
}
