'use strict';

const assert = require('assert');

const { search } = require('./');

describe('#search', () => {
  const tests = [
    {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 9,
      result: 4,
    },
    {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 2,
      result: -1,
    },
  ];

  for (const { nums, target, result } of tests) {
    it(`${nums}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(search(nums, target), result);
    });
  }
});
