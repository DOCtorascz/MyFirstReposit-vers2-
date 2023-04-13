import { assert } from 'chai';
import posSize from '../js/posSize.js';

describe('Функция подсчёта символов без ссылок', function () {
  it('одна ссылка', function () {
    const expectedResult = 8;
    const result = posSize('Привет! https://github.com');
    assert.equal(expectedResult, result);
  });
  it('Несколько ссылок', function () {
    const expectedResult = 24;
    const result = posSize('Привет! https://gЛДОТithub.party https://githuОООb.rich ЧТО ЭТО ТАКОЕ https://gitАФЫАhub.xxx');
    assert.equal(expectedResult, result);
  });
});
