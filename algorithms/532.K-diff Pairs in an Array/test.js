'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findPairs } = require('./');

describe('#findPairs', () => {
  const tests = [
    {
      nums: [3, 1, 4, 1, 5],
      k: 2,
      result: 2,
    },
    {
      nums: [1, 2, 3, 4, 5],
      k: 1,
      result: 4,
    },
    {
      nums: [1, 3, 1, 3, 3],
      k: 0,
      result: 2,
    },
    {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      k: 2,
      result: 8,
    },
    {
      nums: [1, 2, 3, 4, 5],
      k: -1,
      result: 0,
    },
  ];

  _.forEach(tests, ({ nums, k, result }) => {
    it(`${nums}, ${k} -> ${result}`, () => {
      assert.strictEqual(findPairs(nums, k), result);
    });
  });
});
