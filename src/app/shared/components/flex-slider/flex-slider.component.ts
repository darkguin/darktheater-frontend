import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'flex-slider, [flex-slider]',
  templateUrl: './flex-slider.component.html',
  styleUrls: ['./flex-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexSliderComponent {}
