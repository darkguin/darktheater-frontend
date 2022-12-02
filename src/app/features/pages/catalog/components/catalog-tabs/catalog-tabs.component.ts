import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RemoveHostDirective } from '@shared/directives/remove-host';
import { ContentType } from '@core/values';

@Component({
  selector: 'catalog-tabs, [catalog-tabs]',
  template: `
    <div class="catalog-tabs">
      <div
        class="catalog-tabs__tab title-bold-4"
        [class.active]="contentType.MOVIE === selectedTab"
        (click)="onSelectTab(contentType.MOVIE)"
      >
        Movies
      </div>
      <div
        class="catalog-tabs__tab title-bold-4"
        [class.active]="contentType.SERIAL === selectedTab"
        (click)="onSelectTab(contentType.SERIAL)"
      >
        Serials
      </div>
    </div>
  `,
  styleUrls: ['./catalog-tabs.component.scss'],
  hostDirectives: [RemoveHostDirective],
})
export class CatalogTabsComponent implements OnInit {
  readonly contentType = ContentType;

  @Input() defaultTab = ContentType.MOVIE;
  @Output() selected = new EventEmitter();

  selectedTab = ContentType.MOVIE;

  ngOnInit() {
    this.selectedTab = this.defaultTab;
  }

  onSelectTab(tab: ContentType) {
    this.selectedTab = tab;
    this.selected.emit(tab);
  }
}
