import { Card } from '@shared/components/card/models/card.model';
import { MediaMock } from '@mocks/media.mock';
import { ContentType } from '@core/values';

export const HomeNewMotionPicturesMock: Card[] = [
  {
    id: MediaMock[0].id,
    title: MediaMock[0].title,
    contentType: MediaMock[0].contentType,
    image: MediaMock[0].poster + '?w=200',
  } as Card,
  {
    id: MediaMock[1].id,
    title: MediaMock[1].title,
    contentType: MediaMock[1].contentType,
    image: MediaMock[1].poster + '?w=200',
  } as Card,
  {
    id: MediaMock[2].id,
    title: MediaMock[2].title,
    contentType: MediaMock[2].contentType,
    image: MediaMock[2].poster + '?w=200',
  } as Card,
  {
    id: '191',
    title: 'Плохой доктор',
    contentType: ContentType.SERIAL,
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/3dcea9d0-ee30-41d5-b3f4-8f2d89371bd3/posters/apqyt90on3gwreql7ghhxo3pt9wo?w=200',
  } as Card,
  {
    id: '195',
    title: 'Как работают лайфхаки',
    contentType: ContentType.SERIAL,
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/173974af-49bf-4d9a-9ffa-ddd84a62f818/posters/3avpdtz80zi8pbaim1jl7017uwea?w=200',
  } as Card,
  {
    id: '1373',
    title: 'Апгрейд',
    contentType: ContentType.MOVIE,
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/3ea08b5e-ff30-4f7a-a740-ce2e9d1b2698/posters/1k8hjsn1kirj1vjm0swnfd8fj7qi?w=200',
  } as Card,
  {
    id: '192',
    title: 'Отель Портофино',
    contentType: ContentType.SERIAL,
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/f2bc6a3d-e8d3-4a81-b0c9-0e25660844f7/posters/gam6jifbc0hz9uqie2o84k10glc2?w=200',
  } as Card,
  {
    id: '192',
    title: 'Чаки',
    contentType: ContentType.SERIAL,
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/594b1c0d-c109-4527-a1f5-340b890758ed/posters/3xd3gosk409sfyzhvksnbxzaljrp?w=200',
  } as Card,
];
