'use strict';

const assert = require('assert');
const _ = require('lodash');
const { lengthOfLIS } = require('./');

describe('#lengthOfLIS', () => {
  const tests = [
    {
      nums: [10, 9, 2, 5, 3, 7, 101, 18],
      result: 4,
    },
    {
      nums: [5, 3, 9, 10, 2],
      result: 3,
    },
    {
      nums: [],
      result: 0,
    },
    {
      nums: [2, 2],
      result: 1,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(lengthOfLIS(nums), result);
    });
  });
});
