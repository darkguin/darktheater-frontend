import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '@core/services';
import { Icon } from '@shared/components/icon';

@Component({
  selector: 'page-wrapper, [page-wrapper]',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
})
export class PageWrapperComponent {
  @Input() sidebar = true;

  icon = Icon;
  isOpenSidebar = false;

  get isLoading$(): Observable<boolean> {
    return this.loadingService.isLoading$;
  }

  constructor(private loadingService: LoadingService) {}

  onSidebarToggle(isOpen = !this.isOpenSidebar) {
    this.isOpenSidebar = isOpen;
  }
}
