import { Component, Input, OnChanges } from '@angular/core';
import { Content } from '@core/models';
import { MediaTagComponent } from '@shared/components/media-tag/media-tag.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'content-cover, [content-cover]',
  standalone: true,
  templateUrl: './content-cover.component.html',
  styleUrls: ['./content-cover.component.scss'],
  imports: [MediaTagComponent, CommonModule],
})
export class ContentCoverComponent implements OnChanges {
  @Input() content!: Content;

  directors = '';
  genres = '';
  actors = '';
  countries = '';

  ngOnChanges() {
    this.directors = this.content.directors?.map(({ name }) => name).join(', ') || '';
    this.genres = this.content.genres?.map(({ name }) => name).join(', ') || '';
    this.actors = this.content.actors?.map(({ name }) => name).join(', ') || '';
    this.countries = this.content.countries?.map(({ name }) => name).join(', ') || '';
  }
}
