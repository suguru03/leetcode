'use strict';

const assert = require('assert');

const { rob } = require('./');

describe('#rob', () => {
  const tests = [
    {
      nums: [2, 3, 2],
      result: 3,
    },
    {
      nums: [1, 2, 3, 1],
      result: 4,
    },
    {
      nums: [1, 2, 3],
      result: 3,
    },
    {
      nums: [200, 3, 140, 20, 10],
      result: 340,
    },
    {
      nums: [1, 7, 9, 2],
      result: 10,
    },
    {
      nums: [2, 1, 1, 1],
      result: 3,
    },
    {
      nums: [1, 2],
      result: 2,
    },
    {
      nums: [1],
      result: 1,
    },
    {
      nums: [2, 7, 9, 3, 1],
      result: 11,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(rob(nums), result);
    });
  }
});
