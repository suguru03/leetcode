'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxSlidingWindow } = require('./');

describe('#maxSlidingWindow', () => {
  const tests = [
    {
      nums: [1, 3, -1, -3, 5, 3, 6, 7],
      k: 3,
      result: [3, 3, 5, 5, 6, 7],
    },
    {
      nums: [3, 1, 3, 1, 2, 1, 2, 3, 4],
      k: 3,
      result: [3, 3, 3, 2, 2, 3, 4],
    },
  ];

  _.forEach(tests, ({ nums, k, result }) => {
    it(`${nums}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(maxSlidingWindow(nums, k), result);
    });
  });
});
