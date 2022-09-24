import { Card } from '@shared/components/card/models/card.model';
import { MediaMock } from '@mocks/media.mock';

export const HomeNewMotionPicturesMock: Card[] = [
  {
    contentId: MediaMock[0].id,
    title: MediaMock[0].title,
    image: MediaMock[0].poster + '?w=200',
  } as Card,
  {
    contentId: MediaMock[1].id,
    title: MediaMock[1].title,
    image: MediaMock[1].poster + '?w=200',
  } as Card,
  {
    contentId: MediaMock[2].id,
    title: MediaMock[2].title,
    image: MediaMock[2].poster + '?w=200',
  } as Card,
  {
    contentId: '',
    title: 'Плохой доктор',
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/3dcea9d0-ee30-41d5-b3f4-8f2d89371bd3/posters/apqyt90on3gwreql7ghhxo3pt9wo?w=200',
  } as Card,
  {
    contentId: '',
    title: 'Строительство гигантов',
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/22990330-0542-4cdb-a9b3-69b2f55d8f38/posters/cfl7f6qgmsnrcpduvlzs8n0u1ht2?w=200',
  } as Card,
  {
    contentId: '',
    title: 'Апгрейд',
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/3ea08b5e-ff30-4f7a-a740-ce2e9d1b2698/posters/1k8hjsn1kirj1vjm0swnfd8fj7qi?w=200',
  } as Card,
  {
    contentId: '',
    title: 'Отель Портофино',
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/f2bc6a3d-e8d3-4a81-b0c9-0e25660844f7/posters/gam6jifbc0hz9uqie2o84k10glc2?w=200',
  } as Card,
  {
    contentId: '',
    title: 'Чаки',
    image:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/594b1c0d-c109-4527-a1f5-340b890758ed/posters/3xd3gosk409sfyzhvksnbxzaljrp?w=200',
  } as Card,
];
