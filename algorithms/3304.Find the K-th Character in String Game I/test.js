'use strict';

const assert = require('assert');

const { kthCharacter } = require('./');

describe('#kthCharacter', () => {
  const tests = [
    {
      k: 5,
      result: 'b',
    },
    {
      k: 10,
      result: 'c',
    },
    {
      k: 489,
      result: 'f',
    },
  ];

  for (const { k, result } of tests) {
    it(`${k} -> ${result}`, () => {
      assert.deepStrictEqual(kthCharacter(k), result);
    });
  }
});
