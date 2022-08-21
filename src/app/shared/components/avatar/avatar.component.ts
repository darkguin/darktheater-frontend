import { Component, Input } from '@angular/core';

@Component({
  selector: 'avatar, [avatar]',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() src = '';
  @Input() text = '';

  @Input() width = '100%';
  @Input() height = '100%';

  @Input() variant: 'circle' | 'rounded' | 'square' = 'circle';

  get variantClass(): string {
    return `avatar--${this.variant || 'circle'}`;
  }
}
