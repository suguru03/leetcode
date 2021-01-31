'use strict';

const assert = require('assert');

const { minimumDeviation } = require('./');

describe('#minimumDeviation', () => {
  const tests = [
    {
      nums: [1, 2, 3, 4],
      result: 1,
    },
    {
      nums: [4, 1, 5, 20, 3],
      result: 3,
    },
    {
      nums: [2, 10, 8],
      result: 3,
    },
    {
      nums: [2, 2, 2],
      result: 0,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(minimumDeviation(nums), result);
    });
  }
});
