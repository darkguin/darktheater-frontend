import { Card } from '@shared/components/card/models/card.model';
import { MediaMock } from '@mocks/media.mock';
import { ContentType } from '@core/values';

export const HomeRecommendationMock: Card[] = [
  {
    id: MediaMock[3].id,
    title: MediaMock[3].title,
    contentType: MediaMock[3].contentType,
    image: MediaMock[3].poster + '?w=200',
  } as Card,
  {
    id: MediaMock[4].id,
    title: MediaMock[4].title,
    contentType: MediaMock[4].contentType,
    image: MediaMock[4].poster + '?w=200',
  } as Card,
  {
    id: '1367',
    title: 'Прошлой ночью в Сохо',
    contentType: ContentType.MOVIE,
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/9febd9a8-a304-4ed4-b23c-ba2a86a66010/posters/a7ume09i3c13p54p9xw1i7x8omwv?w=200',
  } as Card,
  {
    id: '190',
    title: 'Новый Папа',
    contentType: ContentType.SERIAL,
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/f28fc701-1386-4246-851d-f2388d71a298/posters/y3mzte2w3e1llugmfcv4xpfl3a5y?w=200',
  } as Card,
  {
    id: '1368',
    title: 'Дорогой Эван Хансен',
    contentType: ContentType.MOVIE,
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/a8301259-d395-48c4-9f5e-958e59c9ac38/posters/d0rut4k1skcz8awrn1n40gnp4z38?w=200',
  } as Card,
  {
    id: '1369',
    title: 'Вальдо',
    contentType: ContentType.MOVIE,
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/4b97157f-0f02-4630-a806-917fbc287b0d/posters/ey66vy9va3fi3xgg958exftf4lpr?w=200',
  } as Card,
  {
    id: '1370',
    title: 'Зверопой 2',
    contentType: ContentType.MOVIE,
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/384587b0-f42c-45d8-bdd7-9d9fe91a735c/posters/yot0sjq4pofvgmniirwrn962o7zj?w=200',
  } as Card,
];
