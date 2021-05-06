'use strict';

const assert = require('assert');

const { jump } = require('./');

describe('#jump', () => {
  const tests = [
    {
      nums: [2, 3, 1, 1, 4],
      result: 2,
    },
    {
      nums: [2, 3, 0, 1, 4],
      result: 2,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(jump(nums), result);
    });
  }
});
