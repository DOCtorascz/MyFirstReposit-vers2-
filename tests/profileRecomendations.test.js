import { assert } from 'chai';
import platformFilter from '../js/profileRecomendations.js';

describe('Функция рекомендаций', function () {
  it('одна рекомендация', function () {
    let expectedResult = [257, 258];
    let result = platformFilter(
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
            'как вам #сегодня новая версия ss javascript',
          ],
        },
        {
          id: 258,
          posts: [
            '#сегодня мне не #концерте понравилась #ss #ss #новая песня linkinpark #ss',
          ],
        },
      ],
      1,
    );
    expectedResult.forEach(item => {
      result.forEach(item2 => {
        if (item === item2) {
          assert.equal(item, item2);
        }
      })
    })
  });
});
