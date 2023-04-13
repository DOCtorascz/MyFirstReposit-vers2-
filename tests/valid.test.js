import { assert } from 'chai';
import valid from '../js/valid.js';

describe('Функция валидации email', function () {
  it('одна почта', function () {
    const expectedResult = true;
    const result = valid('timur@mail.ru');
    assert.equal(expectedResult, result);
  });
  it('c двумя собаками', function () {
    const expectedResult = false;
    const result = valid('timur@@mail.ru');
    assert.equal(expectedResult, result);
  });
  it('c двумя точками', function () {
    const expectedResult = false;
    const result = valid('timur@mail..ru');
    assert.equal(expectedResult, result);
  });
  it('разные домены', function () {
    const expectedResult = true;
    const result = valid('timur@mail.rich');
    assert.equal(expectedResult, result);
  });
});
