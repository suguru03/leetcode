'use strict';

const assert = require('assert');

const { hasAllCodes } = require('./');

describe('#hasAllCodes', () => {
  const tests = [
    {
      s: '00110110',
      k: 2,
      result: true,
    },
    {
      s: '00110',
      k: 2,
      result: true,
    },
    {
      s: '0110',
      k: 1,
      result: true,
    },
    {
      s: '0110',
      k: 2,
      result: false,
    },
    {
      s: '0000000001011100',
      k: 4,
      result: false,
    },
  ];

  for (const { s, k, result } of tests) {
    it(`${s}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(hasAllCodes(s, k), result);
    });
  }
});
