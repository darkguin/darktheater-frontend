import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'slide, [slide]',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent {
  @Input() image = '';
  @Input() title = '';
  @Input() subtitle = '';

  @Output() clickSlide = new EventEmitter();

  onClickSlide() {
    this.clickSlide.emit();
  }
}
