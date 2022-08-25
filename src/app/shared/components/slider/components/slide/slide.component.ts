import { Component, Input, OnInit } from '@angular/core';
import { SliderItem } from '@shared/components/slider';

@Component({
  selector: 'slide, [slide]',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  @Input() slide?: SliderItem;

  get backgroundImage() {
    return this.slide?.image ? `url(${this.slide?.image})` : '';
  }

  ngOnInit() {}
}
