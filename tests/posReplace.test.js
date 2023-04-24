import { assert } from 'chai';
import posReplace from '../public/js/posReplace.js';

describe('Функция поиска ссылок', function () {
  it('одна ссылка', function () {
    const expectedResult = 'Привет! <a href="git.com">git.com</a>';
    const result = posReplace('Привет! git.com');
    assert.equal(expectedResult, result);
  });
  it('2 ссылки', function () {
    const expectedResult = 'Привет! <a href="git.com">git.com</a> <a href="git.ru">git.ru</a>';
    const result = posReplace('Привет! git.com git.ru');
    assert.equal(expectedResult, result);
  });
  it('Ссылка в начале', function () {
    const expectedResult = '<a href="git.ooo">git.ooo</a>';
    const result = posReplace('git.ooo');
    assert.equal(expectedResult, result);
  });
  it('Ссылка с ошибкой', function () {
    const expectedResult = 'git.oo';
    const result = posReplace('git.oo');
    assert.equal(expectedResult, result);
  });
});
