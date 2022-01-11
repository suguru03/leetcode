'use strict';

const assert = require('assert');

const { findDuplicate } = require('./');

describe('#findDuplicate', () => {
  const tests = [
    {
      nums: [1, 3, 4, 2, 2],
      result: 2,
    },
    {
      nums: [3, 1, 3, 4, 2],
      result: 3,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(findDuplicate(nums), result);
    });
  }
});
