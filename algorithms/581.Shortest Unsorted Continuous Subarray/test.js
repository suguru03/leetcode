'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findUnsortedSubarray } = require('./');

describe('#findUnsortedSubarray', () => {
  const tests = [
    {
      nums: [2, 6, 4, 8, 10, 9, 15],
      result: 5,
    },
    {
      nums: [2, 4, 8, 10],
      result: 0,
    },
    {
      nums: [2, 4, 8, 10, 1],
      result: 5,
    },
    {
      nums: [2, 6, 4, 8, 10, 1, 2],
      result: 7,
    },
    {
      nums: [1, 3, 2, 2, 2],
      result: 4,
    },
    {
      nums: [1, 2, 2, 2, 3],
      result: 0,
    },
    {
      nums: [1, 2, 3, 3, 3],
      result: 0,
    },
    {
      nums: [2, 3, 3, 2, 4],
      result: 3,
    },
    {
      nums: [1, 2, 4, 5, 3],
      result: 3,
    },
    {
      nums: [1, 3, 5, 2, 4],
      result: 4,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(findUnsortedSubarray(nums), result);
    });
  });
});
