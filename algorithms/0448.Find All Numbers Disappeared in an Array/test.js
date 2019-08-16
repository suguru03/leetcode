'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findDisappearedNumbers } = require('./');

describe('#findDisappearedNumbers', () => {
  const tests = [
    {
      nums: [4, 3, 2, 7, 8, 2, 3, 1],
      result: [5, 6],
    },
    {
      nums: [1, 1, 1, 1, 5, 1],
      result: [2, 3, 4, 6],
    },
    {
      nums: [3, 3, 3],
      result: [1, 2],
    },
    {
      nums: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      result: [],
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`[${nums}] -> [${result}]`, () => {
      assert.deepEqual(findDisappearedNumbers(nums), result);
    });
  });
});
