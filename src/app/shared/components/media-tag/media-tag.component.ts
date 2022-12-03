import { Component, Input } from '@angular/core';
import { Content, Movie, Season, Serial } from '@core/models';
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
  @Input() content!: Content;

  get episodes() {
    let episodes = 0;
    (this.content as Serial).seasons?.forEach((season: Season) => {
      episodes += season.episodes?.length;
    });
    return episodes;
  }

  get duration() {
    if (!(this.content as Movie)?.duration) return '';
    const { h, m } = DatetimeUtil.toHms((this.content as Movie).duration);
    return `${h} ч ${m} мин`;
  }
}
