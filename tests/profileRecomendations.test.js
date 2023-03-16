// import { assert } from 'chai';
// import profileRecomendations from '../js/profileRecomendations.js';

// describe('Функция рекомендация', function () {
//   it('одна рекомендация', function () {
//     const expectedResult = 258;
//     const result = profileRecomendations({
//       id: 256,
//       posts: [
//         'Привет. #сегодня был на концерте группы #linkinpark',
//         'как вам новая песня #linkinpark ss'
//       ]
//     },
//     [
//       {
//         id: 257,
//         posts: [
//          'Сегодня вышла новая версия #javascript',
//          'как вам новая версия #ss #javascript'
//          ]
//        },
//        {
//         id: 258,
//         posts: [
//          '#сегодня мне не понравилась новая песня linkinpark #ss'
//          ]
//         }
//       ],
//       1
//     )
//     assert.equal(expectedResult, result);
//   });
//   it('2 рекомендации', function () {
//     const expectedResult = [257, 258];
//     const result = profileRecomendations({
//       id: 256,
//       posts: [
//         'Привет. #сегодня был на концерте группы #linkinpark',
//         'как вам новая песня #linkinpark #ss'
//       ]
//     },
//     [
//       {
//         id: 257,
//         posts: [
//          'Сегодня вышла новая версия #javascript',
//          'как вам новая версия #ss #javascript'
//          ]
//        },
//        {
//         id: 258,
//         posts: [
//          '#сегодня мне не понравилась новая песня linkinpark #ss'
//          ]
//         }
//       ],
//       1
//     )
//     assert.equal(expectedResult, result);
//   });
// });