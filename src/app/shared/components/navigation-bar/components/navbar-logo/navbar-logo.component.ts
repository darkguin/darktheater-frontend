import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'navbar-logo',
  templateUrl: './navbar-logo.component.html',
  styleUrls: ['./navbar-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarLogoComponent {
  @Input() text = '';
  @Input() image = '';
  @Input() href = '#';
  @Input() variant: 'text' | 'image' = 'text';
}
