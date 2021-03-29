'use strict';

const assert = require('assert');

const { originalDigits } = require('./');

describe('#originalDigits', () => {
  const tests = [
    {
      s: 'owoztneoer',
      result: '012',
    },
    {
      s: 'fviefuro',
      result: '45',
    },
    {
      s: 'xsi',
      result: '6',
    },
  ];

  for (const { s, result } of tests) {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(originalDigits(s), result);
    });
  }
});
