import { assert } from 'chai';
import timeBack from '../js/timeBack.js';

describe('Функция времени', function () {
  it('1', function () {
    const expectedResult = '1 минуту назад';
    const result = timeBack(1);
    assert.equal(expectedResult, result);
  });
  it('5', function () {
    const expectedResult = '5 минут назад';
    const result = timeBack(5);
    assert.equal(expectedResult, result);
  });
  it('более года', function () {
    const expectedResult = 'более года назад';
    const result = timeBack(525601);
    assert.equal(expectedResult, result);
  });
});
