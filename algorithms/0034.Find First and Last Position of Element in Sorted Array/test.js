'use strict';

const assert = require('assert');

const { searchRange } = require('./');

describe('#searchRange', () => {
  const tests = [
    {
      nums: [5, 7, 7, 8, 8, 10],
      target: 8,
      result: [3, 4],
    },
    {
      nums: [5, 7, 7, 8, 8, 10],
      target: 6,
      result: [-1, -1],
    },
    {
      nums: [5, 7, 7, 7, 7, 7, 7, 8, 8, 10],
      target: 7,
      result: [1, 6],
    },
    {
      nums: [2, 2],
      target: 2,
      result: [0, 1],
    },
    {
      nums: [1, 4],
      target: 4,
      result: [1, 1],
    },
  ];

  for (const { nums, target, result } of tests) {
    it(`${nums}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(searchRange(nums, target), result);
    });
  }
});
