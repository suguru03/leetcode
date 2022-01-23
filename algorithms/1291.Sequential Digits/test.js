'use strict';

const assert = require('assert');

const { sequentialDigits } = require('./');

describe('#sequentialDigits', () => {
  const tests = [
    {
      low: 100,
      high: 300,
      result: [123, 234],
    },
    {
      low: 1000,
      high: 13000,
      result: [1234, 2345, 3456, 4567, 5678, 6789, 12345],
    },
  ];

  for (const { low, high, result } of tests) {
    it(`${low}, ${high} -> ${result}`, () => {
      assert.deepStrictEqual(sequentialDigits(low, high), result);
    });
  }
});
