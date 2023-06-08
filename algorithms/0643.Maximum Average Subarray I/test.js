'use strict';

const assert = require('assert');

const { findMaxAverage } = require('./');

describe('#findMaxAverage', () => {
  const tests = [
    {
      nums: [1, 12, -5, -6, 50, 3],
      k: 4,
      result: 12.75,
    },
    {
      nums: [1, 12, -5, -6],
      k: 4,
      result: 0.5,
    },
    {
      nums: [5],
      k: 1,
      result: 5,
    },
    {
      nums: [-1],
      k: 1,
      result: -1,
    },
  ];

  for (const { nums, k, result } of tests) {
    it(`[${nums}], ${k} -> ${result}`, () => {
      assert.strictEqual(findMaxAverage(nums, k), result);
    });
  }
});
