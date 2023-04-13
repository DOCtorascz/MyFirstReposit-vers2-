import { assert } from 'chai';
import platformFilter from '../public/js/platformFilter.js';

describe('Функция цензуры', function () {
  it('одно слово', function () {
    const expectedResult = 'Да вы что?? *** там?';
    const result = platformFilter('Да вы что?? охуели там?', ['охуели']);
    assert.equal(expectedResult, result);
  });
  it('два слова', function () {
    const expectedResult = 'Да вы что?? *** *** там?';
    const result = platformFilter('Да вы что?? охуели охуели там?', ['охуели']);
    assert.equal(expectedResult, result);
  });
  it('разные слова', function () {
    const expectedResult = 'Да вы что?? *** там? ***ь';
    const result = platformFilter('Да вы что?? охуели там? блядь', ['охуели', 'блядь']);
    assert.equal(expectedResult, result);
  });
  it('в начале', function () {
    const expectedResult = '*** Да вы что?? *** там? ***ь';
    const result = platformFilter('сука Да вы что?? охуели там? блядь', ['сука', 'охуели', 'блядь']);
    assert.equal(expectedResult, result);
  });
});
