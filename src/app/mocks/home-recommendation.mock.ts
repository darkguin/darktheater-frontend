import { Card } from '@shared/components/card/models/card.model';
import { MediaMock } from '@mocks/media.mock';

export const HomeRecommendationMock: Card[] = [
  {
    contentId: MediaMock[3].id,
    title: MediaMock[3].title,
    image: MediaMock[3].poster + '?w=200',
  } as Card,
  {
    contentId: MediaMock[4].id,
    title: MediaMock[4].title,
    image: MediaMock[4].poster + '?w=200',
  } as Card,
  {
    contentId: '',
    title: 'Прошлой ночью в Сохо',
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/9febd9a8-a304-4ed4-b23c-ba2a86a66010/posters/a7ume09i3c13p54p9xw1i7x8omwv?w=200',
  } as Card,
  {
    contentId: '',
    title: 'Новый Папа',
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/f28fc701-1386-4246-851d-f2388d71a298/posters/y3mzte2w3e1llugmfcv4xpfl3a5y?w=200',
  } as Card,
  {
    contentId: '',
    title: 'Дорогой Эван Хансен',
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/a8301259-d395-48c4-9f5e-958e59c9ac38/posters/d0rut4k1skcz8awrn1n40gnp4z38?w=200',
  } as Card,
  {
    contentId: '',
    title: 'Вальдо',
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/4b97157f-0f02-4630-a806-917fbc287b0d/posters/ey66vy9va3fi3xgg958exftf4lpr?w=200',
  } as Card,
  {
    contentId: '',
    title: 'Зверопой 2',
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/384587b0-f42c-45d8-bdd7-9d9fe91a735c/posters/yot0sjq4pofvgmniirwrn962o7zj?w=200',
  } as Card,
];
