import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Media } from '@core/models';
import { MediaMock } from '@mocks/media.mock';
import { ContentType, NavigationFullPath, RoutePath } from '@core/values';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private data = new BehaviorSubject<Media[]>(MediaMock);

  constructor() {}

  getById(id: string): Media | undefined {
    return this.data.value.find((item: Media) => item.id === id);
  }

  createContentUrl({ id, contentType }: Media): string {
    return NavigationFullPath[
      contentType === ContentType.MOVIE ? RoutePath.MOVIES : RoutePath.SERIES
    ].replace(':id', id);
  }
}
