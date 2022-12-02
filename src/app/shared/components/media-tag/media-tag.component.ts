import { Component, Input } from '@angular/core';
import { MovieMock, Series } from '@core/models';
import { CommonModule } from '@angular/common';
import { DatetimeUtil } from '@core/utils/datetime.util';

@Component({
  selector: 'media-tag',
  standalone: true,
  templateUrl: './media-tag.component.html',
  styleUrls: ['./media-tag.component.scss'],
  imports: [CommonModule],
})
export class MediaTagComponent {
  @Input() media!: MovieMock & Series;

  get episodes() {
    let episodes = 0;
    this.media.seasons?.forEach((season) => (episodes += season.episodes?.length));
    return episodes;
  }

  get duration() {
    if (!this.media.duration) return '';
    const { h, m } = DatetimeUtil.toHms(this.media.duration);
    return `${h} ч ${m} мин`;
  }
}
