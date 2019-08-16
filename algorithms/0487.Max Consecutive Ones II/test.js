'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findMaxConsecutiveOnes2: findMaxConsecutiveOnes } = require('./');

describe('#findMaxConsecutiveOnes', () => {
  const tests = [
    {
      nums: [1],
      result: 1,
    },
    {
      nums: [1, 0, 1, 1, 0],
      result: 4,
    },
    {
      nums: [1, 1, 0, 1],
      result: 4,
    },
    {
      nums: [0, 1, 1, 1, 0],
      result: 4,
    },
    {
      nums: [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
      result: 7,
    },
    {
      nums: [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
      result: 7,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.strictEqual(findMaxConsecutiveOnes(nums), result);
    });
  });
});
