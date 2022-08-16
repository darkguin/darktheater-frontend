import { Component } from '@angular/core';
import { AppInfo, NavigationFullPath, NavigationPath } from '@core/values';
import { LoadingService } from '@core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'auth-wrapper, [auth-wrapper]',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss'],
})
export class AuthWrapperComponent {
  appInfo = AppInfo;

  get homePath() {
    return NavigationFullPath[NavigationPath.HOME];
  }

  get isLoading$(): Observable<boolean> {
    return this.loadingService.isLoading$;
  }

  constructor(private loadingService: LoadingService) {}
}
