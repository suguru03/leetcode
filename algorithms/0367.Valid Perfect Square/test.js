'use strict';

const assert = require('assert');

const { isPerfectSquare } = require('./');

describe('#isPerfectSquare', () => {
  const tests = [
    {
      num: 16,
      result: true,
    },
    {
      num: 14,
      result: false,
    },
  ];

  for (const { num, result } of tests) {
    it(`${num} -> ${result}`, () => {
      assert.strictEqual(isPerfectSquare(num), result);
    });
  }
});
