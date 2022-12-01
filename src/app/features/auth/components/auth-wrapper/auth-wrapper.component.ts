import { Component } from '@angular/core';
import { AppInfo, NavigationFullPath, RoutePath } from '@core/values';
import { LoadingService } from '@core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'auth-wrapper, [auth-wrapper]',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss'],
})
export class AuthWrapperComponent {
  appInfo = AppInfo;

  constructor(private loadingService: LoadingService) {}

  get homePath() {
    return NavigationFullPath[RoutePath.HOME];
  }

  get isLoading$(): Observable<boolean> {
    return this.loadingService.isLoading$;
  }
}
