import { Media, MovieMock, Series } from '@core/models';
import { ContentType } from '@core/values';

export const MediaMock: Media[] = [
  {
    id: '1371',
    title: 'Мастер меча',
    contentType: ContentType.MOVIE,
    poster:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/afd90b6a-77a0-41cf-9af2-4b3ee5b3417f/posters/rv6xc8ngs44fqhcdqocib92fr54w',
    background:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/afd90b6a-77a0-41cf-9af2-4b3ee5b3417f/backgrounds/4ulaobat9dlavl3l09g6wkn2jsur',
  } as MovieMock,
  {
    id: '1372',
    title: 'Поворот не туда: Наследие',
    contentType: ContentType.MOVIE,
    poster:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/7c6455b1-f34f-460e-adaf-226089f8616f/posters/hgl42ym6g8rzuqxo2pdpgx1jopp3',
    background:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/7c6455b1-f34f-460e-adaf-226089f8616f/backgrounds/icz5qmcgehhprb6u7r9h5xlopqrv',
  } as MovieMock,
  {
    id: '1378',
    contentType: ContentType.MOVIE,
    title: 'Дальний космос',
    poster:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/1541b715-4b05-4077-8d65-2218931fb661/posters/rges43p1cpkg683fbfykxwqpcu2b',
    background:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/d0b58f45-d78f-43c2-8541-abd4233e37f9/backgrounds/0mv9y99pbm44ldnycwchbcm6tc1r',
  } as Series,
  {
    id: '1365',
    contentType: ContentType.MOVIE,
    title: 'Шоу Трумана',
    poster:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/be534401-de4e-48bf-92cf-9baf04e76da3/posters/6fm9696mh1q61yze01k88r33kydf',
    background:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/be534401-de4e-48bf-92cf-9baf04e76da3/backgrounds/mv99ak6xb190jjnc39aypx13x6d2',
  } as MovieMock,
  {
    id: '1366',
    contentType: ContentType.MOVIE,
    title: 'Дети Уиндермира',
    poster:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/64734808-06cf-4f7c-a4c4-92e48fa27006/posters/mykjljd1ttvsfe4glguk5qphlw26',
    background:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/64734808-06cf-4f7c-a4c4-92e48fa27006/backgrounds/18oqpz4l79tdqkh77oh01prvvoe6',
  } as MovieMock,
  {
    id: '194',
    contentType: ContentType.SERIAL,
    title: 'Монстр',
    poster:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/0cd871f8-0102-438a-9036-d910759f0ac4/posters/ze6uskh8jmba0sx21m3zo9noepbe',
    background:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/0cd871f8-0102-438a-9036-d910759f0ac4/backgrounds/ha5qfdffkusaahv8o0qfuq91n9s9',
  } as Series,
];
