import { assert } from 'chai';
import hashtag from '../js/hashtag.js';

describe('Функция хештегов', function () {
  it('строка с одним хештегом', function () {
    const expectedResult = '<a href="/search?tag=#привет">#привет</a>';
    const result = hashtag('#привет');
    assert.equal(expectedResult, result);
  });
  it('строка с двумя одинаковыми хештегами', function () {
    const expectedResult = '<a href="/search?tag=#привет">#привет</a> <a href="/search?tag=#привет">#привет</a>';
    const result = hashtag('#привет #привет');
    assert.equal(expectedResult, result);
  });
  it('строка с разными хештегами', function () {
    const expectedResult = '<a href="/search?tag=#привет">#привет</a> <a href="/search?tag=#пока">#пока</a>';
    const result = hashtag('#привет #пока');
    assert.equal(expectedResult, result);
  });
  it('строка без пробела с хештегами', function () {
    const expectedResult = '<a href="/search?tag=#привет#привет">#привет#привет</a>';
    const result = hashtag('#привет#привет');
    assert.equal(expectedResult, result);
  });
  it('строка без хештегов', function () {
    const expectedResult = 'привет';
    const result = hashtag('привет');
    assert.equal(expectedResult, result);
  });
});
