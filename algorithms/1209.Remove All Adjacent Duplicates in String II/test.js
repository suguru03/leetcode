'use strict';

const assert = require('assert');

const { removeDuplicates } = require('./');

describe('#removeDuplicates', () => {
  const tests = [
    {
      s: 'abcd',
      k: 2,
      result: 'abcd',
    },
    {
      s: 'deeedbbcccbdaa',
      k: 3,
      result: 'aa',
    },
    {
      s: 'pbbcggttciiippooaais',
      k: 2,
      result: 'ps',
    },
  ];

  for (const { s, k, result } of tests) {
    it(`${s}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(removeDuplicates(s, k), result);
    });
  }
});
