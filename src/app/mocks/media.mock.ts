import { Episode, Media, Movie, Season, Series } from '@core/models';
import { ContentType } from '@core/values';

export const MediaMock: Media[] = [
  {
    id: 'afd90b6a-77a0-41cf-9af2-4b3ee5b3417f',
    title: 'Мастер меча',
    contentType: ContentType.MOVIE,
    description:
      'Чосон, 1623 год. После свержения монарха Кванхэ-гуна страна погружается в хаос. Через несколько лет солдаты империи Цин забирают крестьян на чужой территории в рабы, их предводитель ищет достойного соперника для поединка на мечах, а простая девушка пытается найти лекарство для слепнущего отца.',
    actors: [],
    directors: [],
    year: 2020,
    releaseDate: '',
    ageLimit: 18,
    duration: 5779,
    poster:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/afd90b6a-77a0-41cf-9af2-4b3ee5b3417f/posters/rv6xc8ngs44fqhcdqocib92fr54w',
    background:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/afd90b6a-77a0-41cf-9af2-4b3ee5b3417f/backgrounds/4ulaobat9dlavl3l09g6wkn2jsur',
    genres: ['Боевик'],
    kinopoiskRatingVoteCount: 77399,
    imdbRatingVoteCount: 4050,
    kinopoiskRating: 7.5,
    imdbRating: 6.8,
    preview:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/afd90b6a-77a0-41cf-9af2-4b3ee5b3417f/previews/u76zrgoiy7ly2wp0r890vd3xmw5t',
    countries: ['Республика Корея'],
    hls: 'https://video.platformcraft.ru/vod/62b5ff240e47cf22a7e7a573/playlist.m3u8',
  } as Movie,
  {
    id: '7c6455b1-f34f-460e-adaf-226089f8616f',
    title: 'Поворот не туда: Наследие',
    contentType: ContentType.MOVIE,
    description:
      'Компания друзей пропала без вести в походе на Аппалачской тропе, где они, несмотря на предупреждения местных жителей, свернули с туристического маршрута. Среди них была девушка, отец которой приезжает в близлежащий городок Харперс-Ферри в надежде отыскать дочь. Он узнаёт, что эти места населены суровыми аборигенами, не жалующими незваных гостей.',
    year: 2020,
    actors: ['Шарлотта Вега', 'Эдейн Брэдли', 'Билл Сейдж', 'Эмма Дюмон'],
    directors: ['Майк П. Нельсон'],
    releaseDate: '',
    ageLimit: 18,
    duration: 6302,
    poster:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/7c6455b1-f34f-460e-adaf-226089f8616f/posters/hgl42ym6g8rzuqxo2pdpgx1jopp3',
    background:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/7c6455b1-f34f-460e-adaf-226089f8616f/backgrounds/icz5qmcgehhprb6u7r9h5xlopqrv',
    genres: ['Боевик'],
    kinopoiskRatingVoteCount: 0,
    imdbRatingVoteCount: 0,
    kinopoiskRating: 0.0,
    imdbRating: 0.0,
    preview:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/7c6455b1-f34f-460e-adaf-226089f8616f/previews/dkyj1io771c28cfhrpb96qbxibui',
    countries: ['США', 'Германия'],
    hls: 'https://video.platformcraft.ru/vod/630147cc0e47cf4fa8ae049b/playlist.m3u8',
  } as Movie,
  {
    actors: [
      'Доминик Уэст',
      'Дэвид Ойелоуо',
      'Лили Коллинз',
      'Адиль Ахтар',
      'Оливия Колман',
      'Эрин Келлиман',
      'Элли Бамбер',
      'Джош О’Коннор',
      'Дэвид Брэдли',
      'Эмма Филдинг',
      'Энцо Чиленти',
      'Джозеф Куинн',
      'Арчи Мадекве',
      'Тёрло Конвери',
      'Натали Симпсон',
    ],
    directors: ['Том Шенклэнд'],
    seasons: [
      {
        id: 'fd056871-895d-4b9d-a69f-8a70762b1a46',
        title: '1 сезон',
        contentType: ContentType.SEASON,
        description:
          'Жан Вальжан — осужденный за кражу хлеба беглый каторжник, на протяжении долгих лет скрывается от инспектора Жавера. Жавер, в свою очередь, свято верит в справедливость закона и считает делом чести поимку беглого вора. Параллельно с их противостоянием развивается трагичная история Фантины и ее незаконнорожденной дочери Козетты. После смерти Фантины Жан Вальжан, считающий себя в ответе за ее судьбу, забирает Козетту и заботится о ней как о родной дочери.',
        year: '',
        actors: [],
        directors: [],
        releaseDate: '',
        ageLimit: 16,
        duration: 0,
        poster:
          'https://viasat-small.cdnvideo.ru/viasat/staging/contents/fd056871-895d-4b9d-a69f-8a70762b1a46/posters/ybqnw9bbgmztc4y4um24wy0t749f',
        background:
          'https://viasat-small.cdnvideo.ru/viasat/staging/contents/fd056871-895d-4b9d-a69f-8a70762b1a46/backgrounds/0rjtijeumbg59kqhyk7gt1xqklmv',
        genres: [],
        countries: [],
        number: 1,
        episodes: [
          {
            id: '63102383-6a21-4777-b1f7-e342b4025c3c',
            contentType: ContentType.EPISODE,
            title: 'Серия 1',
            description:
              'Одна встреча меняет жизнь Жана Вальжана. Он провел на каторге 19 лет, а теперь - крупный предприниматель и честный человек. Когда умирает одна из его несправедливо уволенных работниц, он обещает заботиться о её дочери как о собственной. Да, он изменился, но прошло не оставило его. По следу Жана Вальжана идёт инспектор Жавьер, верный слуга закона, у которого старые счёты с Жаном.',
            year: 2018,
            releaseDate: '',
            ageLimit: 16,
            duration: 3586,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/63102383-6a21-4777-b1f7-e342b4025c3c/posters/4hdkqq29j7heyxo0s04nsthhijkz',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/63102383-6a21-4777-b1f7-e342b4025c3c/backgrounds/zxdurnh32hq390fjm4jdz96av4vx',
            genres: ['Драма'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/63102383-6a21-4777-b1f7-e342b4025c3c/previews/ujxxgnpgzq3xy9pr4mkjvzr9g8en',
            number: 1,
          } as Episode,
          {
            id: '33b1f63a-82a7-4d7c-b735-5b3d2ed15595',
            contentType: ContentType.EPISODE,
            title: 'Серия 2',
            description:
              'Одна встреча меняет жизнь Жана Вальжана. Он провел на каторге 19 лет, а теперь - крупный предприниматель и честный человек. Когда умирает одна из его несправедливо уволенных работниц, он обещает заботиться о её дочери как о собственной. Да, он изменился, но прошло не оставило его. По следу Жана Вальжана идёт инспектор Жавьер, верный слуга закона, у которого старые счёты с Жаном.',
            year: 2018,
            releaseDate: '',
            ageLimit: 16,
            duration: 3584,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/33b1f63a-82a7-4d7c-b735-5b3d2ed15595/posters/hmm9dwsmvaaibqeziuwr2q85n1a3',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/33b1f63a-82a7-4d7c-b735-5b3d2ed15595/backgrounds/ribcnpb3o2mx9zihbl7vgdv1lirl',
            genres: ['Драма'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/33b1f63a-82a7-4d7c-b735-5b3d2ed15595/previews/5e2kd6ea4qymdvl2msioszg4r2yp',
            number: 2,
          } as Episode,
          {
            id: '58a38cb9-c573-45c7-bed9-42b869f49c51',
            contentType: ContentType.EPISODE,
            title: 'Серия 3',
            description:
              'Одна встреча меняет жизнь Жана Вальжана. Он провел на каторге 19 лет, а теперь - крупный предприниматель и честный человек. Когда умирает одна из его несправедливо уволенных работниц, он обещает заботиться о её дочери как о собственной. Да, он изменился, но прошло не оставило его. По следу Жана Вальжана идёт инспектор Жавьер, верный слуга закона, у которого старые счёты с Жаном.',
            year: 2018,
            releaseDate: '',
            ageLimit: 16,
            duration: 3545,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/58a38cb9-c573-45c7-bed9-42b869f49c51/posters/k1bckzejp5515vm3gy322irx0xll',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/58a38cb9-c573-45c7-bed9-42b869f49c51/backgrounds/ewasr0td5utahjdjhfjkhsfs8xtq',
            genres: ['Драма'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/58a38cb9-c573-45c7-bed9-42b869f49c51/previews/gvqn0rl9sp97rckhvqky5zdpcml5',
            number: 3,
          } as Episode,
          {
            id: '2fb5c516-87f7-4659-9aad-0e7b39ef8e1c',
            contentType: ContentType.EPISODE,
            title: 'Серия 4',
            description:
              'Одна встреча меняет жизнь Жана Вальжана. Он провел на каторге 19 лет, а теперь - крупный предприниматель и честный человек. Когда умирает одна из его несправедливо уволенных работниц, он обещает заботиться о её дочери как о собственной. Да, он изменился, но прошло не оставило его. По следу Жана Вальжана идёт инспектор Жавьер, верный слуга закона, у которого старые счёты с Жаном.',
            year: 2018,
            releaseDate: '',
            ageLimit: 16,
            duration: 3585,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/2fb5c516-87f7-4659-9aad-0e7b39ef8e1c/posters/8c61r290f4eagryk8993psgk3re4',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/2fb5c516-87f7-4659-9aad-0e7b39ef8e1c/backgrounds/lrm5i4wqwcczta8orsn5u94ncl9j',
            genres: ['Драма'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/2fb5c516-87f7-4659-9aad-0e7b39ef8e1c/previews/7xn1bmvvpbjmzkf9cr1msey0klnh',
            number: 4,
          } as Episode,
          {
            id: '0974fdca-5d77-4ed1-967a-b54caf80df54',
            contentType: ContentType.EPISODE,
            title: 'Серия 5',
            description:
              'Одна встреча меняет жизнь Жана Вальжана. Он провел на каторге 19 лет, а теперь - крупный предприниматель и честный человек. Когда умирает одна из его несправедливо уволенных работниц, он обещает заботиться о её дочери как о собственной. Да, он изменился, но прошло не оставило его. По следу Жана Вальжана идёт инспектор Жавьер, верный слуга закона, у которого старые счёты с Жаном.',
            year: 2018,
            releaseDate: '',
            ageLimit: 16,
            duration: 3580,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/0974fdca-5d77-4ed1-967a-b54caf80df54/posters/on1j8t3z7xbz1mpkvk6y1kal0auo',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/0974fdca-5d77-4ed1-967a-b54caf80df54/backgrounds/f4oy69lnlcgwot7q1a75lpf10fa4',
            genres: ['Драма'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/0974fdca-5d77-4ed1-967a-b54caf80df54/previews/e43c6eyjidssaqa3oo1ekb6lb77f',
            number: 5,
          } as Episode,
          {
            id: '123be241-d2b6-4cfc-93ea-c93983de3179',
            contentType: ContentType.EPISODE,
            title: 'Серия 6',
            description:
              'Одна встреча меняет жизнь Жана Вальжана. Он провел на каторге 19 лет, а теперь - крупный предприниматель и честный человек. Когда умирает одна из его несправедливо уволенных работниц, он обещает заботиться о её дочери как о собственной. Да, он изменился, но прошло не оставило его. По следу Жана Вальжана идёт инспектор Жавьер, верный слуга закона, у которого старые счёты с Жаном.',
            year: 2018,
            releaseDate: '',
            ageLimit: 16,
            duration: 4418,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/123be241-d2b6-4cfc-93ea-c93983de3179/posters/je7f30puy4sk2h176iwprox90gcp',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/123be241-d2b6-4cfc-93ea-c93983de3179/backgrounds/ka6zepf46hei8fi0caevfdto4euk',
            genres: ['Драма'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/123be241-d2b6-4cfc-93ea-c93983de3179/previews/vji0gzkozqgjahf79qhdhnwuexd6',
            number: 6,
          } as Episode,
        ],
      } as Season,
    ],
    id: 'd0b58f45-d78f-43c2-8541-abd4233e37f9',
    contentType: ContentType.SERIAL,
    title: 'Отверженные',
    description:
      'Одна встреча меняет жизнь Жана Вальжана. Он провел на каторге 19 лет, а теперь - крупный предприниматель и честный человек. Когда умирает одна из его несправедливо уволенных работниц, он обещает заботиться о её дочери как о собственной. Да, он изменился, но прошло не оставило его. По следу Жана Вальжана идёт инспектор Жавьер, верный слуга закона, у которого старые счёты с Жаном.',
    year: 2018,
    releaseDate: '2018-12-30',
    ageLimit: 16,
    duration: 0,
    poster:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/d0b58f45-d78f-43c2-8541-abd4233e37f9/posters/cxi9t6jsmh5yyykua95gbydxmqjs',
    background:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/d0b58f45-d78f-43c2-8541-abd4233e37f9/backgrounds/0mv9y99pbm44ldnycwchbcm6tc1r',
    genres: ['Драма'],
    kinopoiskRatingVoteCount: 6221,
    imdbRatingVoteCount: 5757,
    kinopoiskRating: 8.0,
    imdbRating: 7.8,
    countries: ['Великобритания', 'США'],
  } as Series,
  {
    actors: [
      'Джим Керри',
      'Лора Линни',
      'Ноа Эммерих',
      'Наташа МакЭлхоун',
      'Холланд Тейлор',
      'Брайан Дилейт',
    ],
    directors: ['Питер Уир'],
    id: 'be534401-de4e-48bf-92cf-9baf04e76da3',
    contentType: ContentType.MOVIE,
    title: 'Шоу Трумана',
    description:
      'Страховой агент Труман живёт в маленьком городке на острове, среди людей, которых знает с детства. Каждый день он ходит на работу, общается с друзьями, даже не догадываясь, что с рождения является звездой реалити-шоу. Уже тридцать лет миллионы телезрителей наблюдают за жизнью этого наивного и жизнерадостного человека круглосуточно. Но однажды что-то идёт не так...',
    year: 1998,
    releaseDate: '1998-11-05',
    ageLimit: 6,
    duration: 5921,
    poster:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/be534401-de4e-48bf-92cf-9baf04e76da3/posters/6fm9696mh1q61yze01k88r33kydf',
    background:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/be534401-de4e-48bf-92cf-9baf04e76da3/backgrounds/mv99ak6xb190jjnc39aypx13x6d2',
    genres: ['Фантастика', 'Драма'],
    kinopoiskRatingVoteCount: 360011,
    imdbRatingVoteCount: 994209,
    kinopoiskRating: 8.3,
    imdbRating: 8.1,
    preview:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/be534401-de4e-48bf-92cf-9baf04e76da3/previews/dcx69dc1uuu7mht9v7elsto8m1se',
    countries: ['США'],
    hls: 'https://video.platformcraft.ru/vod/61782d08ef3db50986013102/playlist.m3u8',
  } as Movie,
  {
    id: '64734808-06cf-4f7c-a4c4-92e48fa27006',
    actors: [],
    directors: [],
    contentType: ContentType.MOVIE,
    title: 'Дети Уиндермира',
    title_en: 'Windermere Children',
    description:
      'Август 1945 года. В Великобританию возвращаются дети, выжившие в фашистских концлагерях. Оставшиеся без родителей, они поступают на попечение государства в специальные учебные заведения...',
    year: 2020,
    releaseDate: '',
    ageLimit: 12,
    duration: 4525,
    poster:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/64734808-06cf-4f7c-a4c4-92e48fa27006/posters/mykjljd1ttvsfe4glguk5qphlw26',
    background:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/64734808-06cf-4f7c-a4c4-92e48fa27006/backgrounds/18oqpz4l79tdqkh77oh01prvvoe6',
    genres: ['Драма', 'Исторический'],
    kinopoiskRatingVoteCount: 14316,
    imdbRatingVoteCount: 3832,
    kinopoiskRating: 7.9,
    imdbRating: 7.5,
    preview:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/64734808-06cf-4f7c-a4c4-92e48fa27006/previews/0pc3na0818msee6q1vk3mwb63l4r',
    countries: ['Великобритания', 'Германия'],
    hls: 'https://video.platformcraft.ru/vod/5ee8e8fcef3db55dce42f242/playlist.m3u8',
  } as Movie,
  {
    actors: ['Щин Ха-гюн', 'Ё Джин-гу', 'Чхве Сон-ын'],
    directors: ['Щим На-ён'],
    id: '0cd871f8-0102-438a-9036-d910759f0ac4',
    contentType: ContentType.SERIAL,
    title: 'Монстр',
    description:
      'Напарники расследуют череду жестоких убийств, в одночасье перевернувших тихую жизнь маленького городка. Чтобы выйти на след неуловимого преступника, им придётся не доверять очевидным фактам и уликам. А возможно, и друг другу…',
    year: 0,
    releaseDate: '2021-02-19',
    ageLimit: 18,
    duration: 0,
    poster:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/0cd871f8-0102-438a-9036-d910759f0ac4/posters/ze6uskh8jmba0sx21m3zo9noepbe',
    background:
      'https://viasat-small.cdnvideo.ru/viasat/production/contents/0cd871f8-0102-438a-9036-d910759f0ac4/backgrounds/ha5qfdffkusaahv8o0qfuq91n9s9',
    genres: ['Триллер', 'Детектив'],
    kinopoiskRatingVoteCount: 3686,
    imdbRatingVoteCount: 3147,
    kinopoiskRating: 7.9,
    imdbRating: 8.1,
    countries: ['Республика Корея'],
    seasons: [
      {
        id: 'c52e0ae3-922b-43fe-b98f-2b0224e5aac8',
        contentType: ContentType.SEASON,
        title: '1 сезон',
        description:
          'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
        year: '',
        releaseDate: '',
        ageLimit: 18,
        duration: 0,
        poster:
          'https://viasat-small.cdnvideo.ru/viasat/production/contents/c52e0ae3-922b-43fe-b98f-2b0224e5aac8/posters/irlu6gn40wzyzftex9v71uwtf0qd',
        background:
          'https://viasat-small.cdnvideo.ru/viasat/production/contents/c52e0ae3-922b-43fe-b98f-2b0224e5aac8/backgrounds/ppznu33sped3ncd8dee9prj5ibjn',
        genres: [],
        countries: [],
        number: 1,
        episodes: [
          {
            id: '323bef96-2a6f-4822-a869-e561b1ad0890',
            contentType: ContentType.EPISODE,
            title: '1 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,
            releaseDate: '',
            ageLimit: 18,
            duration: 3725,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/323bef96-2a6f-4822-a869-e561b1ad0890/posters/1oz2jthkauehijsuphwhlavhgprh',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/323bef96-2a6f-4822-a869-e561b1ad0890/backgrounds/mjqnwjx4mk8qz6gwjmq8gugghnt8',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/323bef96-2a6f-4822-a869-e561b1ad0890/previews/a5701pyqpw86yr3n3zpk0w7eim47',
            number: 1,
          } as Episode,
          {
            id: '34c73fc1-a115-4bea-9e14-b8f8a5ccaf63',
            contentType: ContentType.EPISODE,
            title: '2 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,

            releaseDate: '',

            ageLimit: 18,
            duration: 3899,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/34c73fc1-a115-4bea-9e14-b8f8a5ccaf63/posters/kjh0wzrie8s38gak31my1exp70i3',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/34c73fc1-a115-4bea-9e14-b8f8a5ccaf63/backgrounds/gxx82hv7l3uqeaz6iu6av2zm342y',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/34c73fc1-a115-4bea-9e14-b8f8a5ccaf63/previews/8bq8etl82cshk6lxsx466v8setuq',
            number: 2,
          } as Episode,
          {
            id: '69379f42-5619-44db-a450-246248e0622d',
            contentType: ContentType.EPISODE,
            title: '3 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,

            releaseDate: '',

            ageLimit: 18,
            duration: 3658,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/69379f42-5619-44db-a450-246248e0622d/posters/53p3jcosfwsyx3i9w52z9sds0e80',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/69379f42-5619-44db-a450-246248e0622d/backgrounds/tvzl91e5z1ywszpja2607gkqfcav',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/69379f42-5619-44db-a450-246248e0622d/previews/wiq5h0jdzyxajghllz815e90bjjb',
            number: 3,
          } as Episode,
          {
            id: '1ec2f53c-8b0c-4507-b758-94b6fa657dee',
            contentType: ContentType.EPISODE,
            title: '4 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,

            releaseDate: '',

            ageLimit: 18,
            duration: 3535,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/1ec2f53c-8b0c-4507-b758-94b6fa657dee/posters/0wdaww9jznigi2zqc6r86mctq5w6',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/1ec2f53c-8b0c-4507-b758-94b6fa657dee/backgrounds/vvbwllew9k7xjix12yddh89r7j9r',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/1ec2f53c-8b0c-4507-b758-94b6fa657dee/previews/rbrzkbneskxk2ves21kacwlxnem5',
            number: 4,
          } as Episode,
          {
            id: '498809f8-a903-4cc5-8e6d-bd01b9aac84a',
            contentType: ContentType.EPISODE,
            title: '5 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,

            releaseDate: '',

            ageLimit: 18,
            duration: 3707,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/498809f8-a903-4cc5-8e6d-bd01b9aac84a/posters/ysbsctssey4uyzxzdyff7mf4ey93',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/498809f8-a903-4cc5-8e6d-bd01b9aac84a/backgrounds/8b3zin3gbuhobrwqsh56u3i2bcb6',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/498809f8-a903-4cc5-8e6d-bd01b9aac84a/previews/1kv96a6dqyud2e4i0cz8dp4mw6hw',
            number: 5,
          } as Episode,
          {
            id: '4b870acc-1233-4cd8-9fad-7590593d210d',
            contentType: ContentType.EPISODE,
            title: '6 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,

            releaseDate: '',

            ageLimit: 18,
            duration: 3611,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/4b870acc-1233-4cd8-9fad-7590593d210d/posters/xdqb0sl14evskead6x1c6wrawex3',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/4b870acc-1233-4cd8-9fad-7590593d210d/backgrounds/bmxj1gec2w29g3vs3p46swdeo0wt',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/4b870acc-1233-4cd8-9fad-7590593d210d/previews/6qoguk0k5l7ltxm7w7tqhny7p6fx',
            number: 6,
          } as Episode,
          {
            id: '61eae0be-9192-40ae-9bc0-6fb8bbf75197',
            contentType: ContentType.EPISODE,
            title: '7 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,

            releaseDate: '',

            ageLimit: 18,
            duration: 4304,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/61eae0be-9192-40ae-9bc0-6fb8bbf75197/posters/axia5rhhd15rc2nwhhob4vdl5plk',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/61eae0be-9192-40ae-9bc0-6fb8bbf75197/backgrounds/nvo50kr7gji1m4g0qtenljtxurpa',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/61eae0be-9192-40ae-9bc0-6fb8bbf75197/previews/9hx7fwyku31efwd52vglu76vf2wj',
            number: 7,
          } as Episode,
          {
            id: 'b2b409f0-000f-492c-9d56-ee7dc31db4ab',
            contentType: ContentType.EPISODE,
            title: '8 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,

            releaseDate: '',

            ageLimit: 18,
            duration: 4109,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/b2b409f0-000f-492c-9d56-ee7dc31db4ab/posters/h22e3kx2n9xt2a9horwd1a5m0p6h',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/b2b409f0-000f-492c-9d56-ee7dc31db4ab/backgrounds/de02zf4zatb1pjkmy109t13c6ra8',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/b2b409f0-000f-492c-9d56-ee7dc31db4ab/previews/853zpane7586p0oiacia9pe6dq75',
            number: 8,
          } as Episode,
          {
            id: '2d377c78-9d78-4373-bf78-13b60a0cf183',
            contentType: ContentType.EPISODE,
            title: '9 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,

            releaseDate: '',

            ageLimit: 18,
            duration: 3499,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/2d377c78-9d78-4373-bf78-13b60a0cf183/posters/2v37gge9zvtr31fhsa9b01mtamd6',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/2d377c78-9d78-4373-bf78-13b60a0cf183/backgrounds/wfu1fd0iqenxn6tcxz7yn9l8518d',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/2d377c78-9d78-4373-bf78-13b60a0cf183/previews/lr18kmc6fnngsxk9j9hhtnzyfwuc',
            number: 9,
          } as Episode,
          {
            id: '0f0b9770-da05-4401-9917-2859340cdca7',
            contentType: ContentType.EPISODE,
            title: '10 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,

            releaseDate: '',

            ageLimit: 18,
            duration: 3599,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/0f0b9770-da05-4401-9917-2859340cdca7/posters/8oop08bq0i3wpw27twz6scnraym2',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/0f0b9770-da05-4401-9917-2859340cdca7/backgrounds/ombksv97j0927za7uqsd50wjpj7h',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/0f0b9770-da05-4401-9917-2859340cdca7/previews/9b5o3q47zix4f5yk95pf9s2ty2jf',
            number: 10,
          } as Episode,
          {
            id: 'e287c54d-e4b8-4700-8f50-f128998ed5c1',
            contentType: ContentType.EPISODE,
            title: '11 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,

            releaseDate: '',

            ageLimit: 18,
            duration: 3610,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/e287c54d-e4b8-4700-8f50-f128998ed5c1/posters/clehsfuqi1ot28fmhhiggynplox8',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/e287c54d-e4b8-4700-8f50-f128998ed5c1/backgrounds/q72q87n1mf5qvxy1ladh21h0ip54',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/e287c54d-e4b8-4700-8f50-f128998ed5c1/previews/zm3c7r572h5ke5j6jcqk8uspmxx5',
            number: 11,
          } as Episode,
          {
            id: 'c7c6bf12-a172-4971-b091-0cc0e50dc73a',
            contentType: ContentType.EPISODE,
            title: '12 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,
            releaseDate: '',
            ageLimit: 18,
            duration: 3864,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/c7c6bf12-a172-4971-b091-0cc0e50dc73a/posters/n8mj9w1etgfah4rc7aydxziw3ni9',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/c7c6bf12-a172-4971-b091-0cc0e50dc73a/backgrounds/srg66xbwtdtd5bbk4v2k4klmroe4',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/c7c6bf12-a172-4971-b091-0cc0e50dc73a/previews/1z2jpcj2yuv8oeplxpcfpaj7akop',
            number: 12,
          } as Episode,
          {
            id: '48c16f36-ae78-4697-954d-8de8146a951d',
            contentType: ContentType.EPISODE,
            title: '13 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,
            releaseDate: '',
            ageLimit: 18,
            duration: 3555,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/48c16f36-ae78-4697-954d-8de8146a951d/posters/mrjwlbtfu15u1525nno3mzmtj6r3',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/48c16f36-ae78-4697-954d-8de8146a951d/backgrounds/dyn9jkqbv17t1aizvissuzq8ceja',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/48c16f36-ae78-4697-954d-8de8146a951d/previews/wrlloyorullx6qvvo8fijrqsh8bi',
            number: 13,
          } as Episode,
          {
            id: 'dc22d2f2-215d-46d8-b499-1ecf7270b035',
            contentType: ContentType.EPISODE,
            title: '14 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,
            releaseDate: '',
            ageLimit: 18,
            duration: 3522,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/dc22d2f2-215d-46d8-b499-1ecf7270b035/posters/am63xpxez2svfg3ei848xjye4iot',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/dc22d2f2-215d-46d8-b499-1ecf7270b035/backgrounds/zvjdjnqa4497l5oneszg91m468g5',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/dc22d2f2-215d-46d8-b499-1ecf7270b035/previews/3btxqmwzdsqzxizrbqroky8vepe1',
            number: 14,
          } as Episode,
          {
            id: 'fe1a9970-8c80-4fe2-b0eb-cecf4cc16bc2',
            contentType: ContentType.EPISODE,
            title: '15 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,
            releaseDate: '',
            ageLimit: 18,
            duration: 3524,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/fe1a9970-8c80-4fe2-b0eb-cecf4cc16bc2/posters/urir03ml36oklbve1k8axsn5yiv2',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/fe1a9970-8c80-4fe2-b0eb-cecf4cc16bc2/backgrounds/dzlptuw4pu1hi47zxiqbhn7135rn',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/fe1a9970-8c80-4fe2-b0eb-cecf4cc16bc2/previews/xi5lgs61q4pgr3l0p56po1rw0ivt',
            number: 15,
          } as Episode,
          {
            id: 'f3d0f778-9cb4-47e3-bc1b-2e50921ab6dc',
            contentType: ContentType.EPISODE,
            title: '16 серия',
            description:
              'Следователь Ли Дон-щик работает в полицейском участке провинциального города. Его напарником и боссом становится молодой амбициозный Хан Джу-во. Вскоре в городке происходит серия жестоких убийств. Несмотря на взаимное недоверие, напарникам предстоит расследовать дело вместе.',
            year: 2021,
            releaseDate: '',
            ageLimit: 18,
            duration: 4542,
            poster:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/f3d0f778-9cb4-47e3-bc1b-2e50921ab6dc/posters/op80ykhairi8o0djb2w6h7w3pw6x',
            background:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/f3d0f778-9cb4-47e3-bc1b-2e50921ab6dc/backgrounds/lgiypmkfyk0jgo44x45h5oqyq0g4',
            genres: ['Триллер', 'Детектив'],
            preview:
              'https://viasat-small.cdnvideo.ru/viasat/production/contents/f3d0f778-9cb4-47e3-bc1b-2e50921ab6dc/previews/7pgckclkqtubsnt1ro493msel359',
            number: 16,
          } as Episode,
        ],
      } as Season,
    ],
  } as Series,
];
