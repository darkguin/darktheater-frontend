import { Component } from '@angular/core';
import { RemoveHostDirective } from '@shared/directives/remove-host';

@Component({
  selector: 'catalog-sidebar, [catalog-sidebar]',
  templateUrl: './catalog-sidebar.component.html',
  styleUrls: ['./catalog-sidebar.component.scss'],
  hostDirectives: [RemoveHostDirective],
})
export class CatalogSidebarComponent {}
