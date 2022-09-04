import { Component, Input } from '@angular/core';
import { Media } from '@core/models';
import { MediaTagComponent } from '@shared/components/media-tag/media-tag.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'content-cover, [content-cover]',
  standalone: true,
  templateUrl: './content-cover.component.html',
  styleUrls: ['./content-cover.component.scss'],
  imports: [MediaTagComponent, CommonModule],
})
export class ContentCoverComponent {
  @Input() media!: Media;

  get directors(): string {
    return this.media.directors?.join(', ') || '';
  }

  get genres(): string {
    return this.media.genres?.join(', ') || '';
  }

  get actors(): string {
    return this.media.actors?.join(', ') || '';
  }

  get countries(): string {
    return this.media.countries?.join(', ') || '';
  }
}
