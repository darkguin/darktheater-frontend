import { Component } from '@angular/core';
import { RemoveHostDirective } from '@shared/directives/remove-host';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  hostDirectives: [RemoveHostDirective],
})
export class MainLayoutComponent {}
