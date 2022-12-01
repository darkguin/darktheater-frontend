import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '@core/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'loader, [loader]',
  standalone: true,
  template: ` <div *ngIf="isLoading$ | async" class="loader"></div> `,
  styleUrls: ['./loader.component.scss'],
  imports: [CommonModule],
})
class LoaderComponent {
  constructor(private loadingService: LoadingService) {}

  get isLoading$(): Observable<boolean> {
    return this.loadingService.isLoading$;
  }
}

export { LoaderComponent };
