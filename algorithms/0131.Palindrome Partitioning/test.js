'use strict';

const assert = require('assert');

const { partition } = require('./');

describe('#partition', () => {
  const tests = [
    {
      s: 'aab',
      result: [
        ['a', 'a', 'b'],
        ['aa', 'b'],
      ],
    },
    {
      s: 'abb',
      result: [
        ['a', 'b', 'b'],
        ['a', 'bb'],
      ],
    },
    {
      s: 'a',
      result: [['a']],
    },
    {
      s: 'aba',
      result: [['a', 'b', 'a'], ['aba']],
    },
    {
      s: 'aabbff',
      result: [
        ['a', 'a', 'b', 'b', 'f', 'f'],
        ['a', 'a', 'b', 'b', 'ff'],
        ['a', 'a', 'bb', 'f', 'f'],
        ['a', 'a', 'bb', 'ff'],
        ['aa', 'b', 'b', 'f', 'f'],
        ['aa', 'b', 'b', 'ff'],
        ['aa', 'bb', 'f', 'f'],
        ['aa', 'bb', 'ff'],
      ],
    },
  ];

  for (const { s, result } of tests) {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(partition(s), result);
    });
  }
});
