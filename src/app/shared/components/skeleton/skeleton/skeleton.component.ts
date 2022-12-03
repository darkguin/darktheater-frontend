import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skeleton" [class.skeleton--animated]="animated" [ngStyle]="style">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent {
  @Input() width = '100%';
  @Input() height = '100%';
  @Input() borderRadius = '12px';
  @Input() animated = false;

  get style() {
    return { width: this.width, height: this.height, borderRadius: this.borderRadius };
  }
}
