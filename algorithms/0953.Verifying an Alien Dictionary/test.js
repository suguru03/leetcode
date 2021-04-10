'use strict';

const assert = require('assert');

const { isAlienSorted } = require('./');

describe('#isAlienSorted', () => {
  const tests = [
    {
      words: ['hello', 'leetcode'],
      order: 'hlabcdefgijkmnopqrstuvwxyz',
      result: true,
    },
    {
      words: ['word', 'world', 'row'],
      order: 'worldabcefghijkmnpqstuvxyz',
      result: false,
    },
    {
      words: ['apple', 'app'],
      order: 'abcdefghijklmnopqrstuvwxyz',
      result: false,
    },
  ];

  for (const { words, order, result } of tests) {
    it(`${words}, ${order} -> ${result}`, () => {
      assert.deepStrictEqual(isAlienSorted(words, order), result);
    });
  }
});
