'use strict';

const assert = require('assert');

const { findMaxLength } = require('./');

describe('#findMaxLength', () => {
  const tests = [
    {
      nums: [0, 1],
      result: 2,
    },
    {
      nums: [0],
      result: 0,
    },
    {
      nums: [0, 1, 0],
      result: 2,
    },
    {
      nums: [0, 0, 1, 1, 1, 1],
      result: 4,
    },
    {
      nums: [0, 0, 1, 1, 1, 0],
      result: 6,
    },
    {
      nums: [1, 0, 1, 0, 1, 1, 0],
      result: 6,
    },
    {
      nums: [0, 1, 1, 0, 1, 1, 1, 0],
      result: 4,
    },
    {
      nums: [
        0,
        1,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        1,
        1,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        0,
        0,
        1,
        1,
      ],
      result: 68,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(findMaxLength(nums), result);
    });
  }
});
