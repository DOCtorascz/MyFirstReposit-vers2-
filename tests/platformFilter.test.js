import { assert } from 'chai';
import platformFilter from '../js/platformFilter.js';

describe('Функция цензуры', function () {
  it('одно слово', function () {
    const expectedResult = 'да вы что?? *** там?';
    const result = platformFilter('Да вы что?? Охуели там?', ['охуели']);
    assert.equal(expectedResult, result);
  });
  it('два слова', function () {
    const expectedResult = 'да вы что?? *** *** там?';
    const result = platformFilter('Да вы что?? Охуели Охуели там?', ['охуели']);
    assert.equal(expectedResult, result);
  });
  it('разные слова', function () {
    const expectedResult = 'да вы что?? *** там? ***ь';
    const result = platformFilter('Да вы что?? Охуели там? Блядь', ['охуели', 'блядь']);
    assert.equal(expectedResult, result);
  });
  it('в начале', function () {
    const expectedResult = '*** да вы что?? *** там? ***ь';
    const result = platformFilter('сука Да вы что?? Охуели там? Блядь', ['сука', 'охуели', 'блядь']);
    assert.equal(expectedResult, result);
  });
});