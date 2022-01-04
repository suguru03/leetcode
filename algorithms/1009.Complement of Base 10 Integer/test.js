'use strict';

const assert = require('assert');

const { bitwiseComplement } = require('./');

describe('#bitwiseComplement', () => {
  const tests = [
    {
      n: 5,
      result: 2,
    },
    {
      n: 7,
      result: 0,
    },
    {
      n: 10,
      result: 5,
    },
    {
      n: 0,
      result: 1,
    },
  ];

  for (const { n, result } of tests) {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(bitwiseComplement(n), result);
    });
  }
});
