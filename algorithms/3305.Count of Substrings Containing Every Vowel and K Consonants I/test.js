'use strict';

const assert = require('assert');

const { countOfSubstrings } = require('./');

describe('#countOfSubstrings', () => {
  const tests = [
    {
      word: 'aeioqq',
      k: 1,
      result: 0,
    },
    {
      word: 'aeiou',
      k: 0,
      result: 1,
    },
    {
      word: 'iqeaouqi',
      k: 2,
      result: 3,
    },
    {
      word: 'ieaouqqieaouqq',
      k: 1,
      result: 3,
    },
    {
      word: 'cuiaeo',
      k: 0,
      result: 1,
    },
    {
      word: 'ieieieiaoud',
      k: 0,
      result: 6,
    },
  ];

  for (const { word, k, result } of tests) {
    it(`${word}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(countOfSubstrings(word, k), result);
    });
  }
});
