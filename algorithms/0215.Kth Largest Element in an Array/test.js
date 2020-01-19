'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findKthLargest } = require('./');

describe('#findKthLargest', () => {
  const tests = [
    {
      nums: [3, 2, 1, 5, 6, 4],
      k: 2,
      result: 5,
    },
    {
      nums: [3, 2, 3, 1, 2, 4, 5, 5, 6],
      k: 4,
      result: 4,
    },
  ];

  _.forEach(tests, ({ nums, k, result }) => {
    it(`${nums}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(findKthLargest(nums, k), result);
    });
  });
});
