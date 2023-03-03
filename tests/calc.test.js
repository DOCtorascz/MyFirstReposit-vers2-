import calc from '../public/assets/calc.js';
import { assert } from 'chai';

describe('Функция калькулятор', function () {
  it('перемножает 2 числа', function () {
    const expectedResult = 8;
    const result = calc(3, 5);
    assert(expectedResult, result);
  });
});
