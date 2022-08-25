import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '@core/services';

@Component({
  selector: 'loader, [loader]',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  get isLoading$(): Observable<boolean> {
    return this.loadingService.isLoading$;
  }

  constructor(private loadingService: LoadingService) {}
}
