import posSize from './posSize.js';
import posReplace from './posReplace.js';
// import valid from './valid.js';
import timeBack from './timeBack.js';
import hashtag from './hashtag.js';
import platformFilter from './platformFilter.js';
import profileRecomendations from './profileRecomendations.js';

posSize('Привет! https://gЛДОТithub.party https://githuОООb.rich ЧТО ЭТО ТАКОЕ https://gitАФЫАhub.xxx');
posReplace('as.plus fdsf f.rest ');
// valid('asd');
timeBack(5);
hashtag('#привет#приветs ');
platformFilter('блядь', ['блядь']);
profileRecomendations(
  {
    id: 256,
    posts: [
      'Привет. #сегодня был на #концерте группы #linkinpark',
      'как вам #новая песня #linkinpark #ss',
    ],
  },
  [
    {
      id: 257,
      posts: [
        'Сегодня вышла новая версия #javascript',
        'как вам #сегодня новая версия #ss #javascript',
      ],
    },
    {
      id: 258,
      posts: [
        '#сегодня мне не #концерте понравилась #ss #ss #новая песня linkinpark #ss',
      ],
    },
  ],
  5,
);
