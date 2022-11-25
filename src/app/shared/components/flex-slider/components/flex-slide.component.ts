import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'flex-slide, [flex-slide]',
  templateUrl: './flex-slide.component.html',
  styleUrls: ['./flex-slide.component.scss'],
})
export class FlexSlideComponent implements AfterViewInit {
  // @ViewChild('template') template!: TemplateRef<any>;

  @Input() active = false;
  @Input() image = '';
  @Input() title = '';
  @Input() subtitle = '';

  @Output() click = new EventEmitter();

  ngAfterViewInit() {
    // const view = this.viewContainerRef.createEmbeddedView(this.template!);
    // view.detectChanges();
  }

  onClick() {
    this.click.emit();
  }
}
