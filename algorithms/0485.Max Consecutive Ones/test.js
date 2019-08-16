'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findMaxConsecutiveOnes } = require('./');

describe('#findMaxConsecutiveOnes', () => {
  const tests = [
    {
      nums: [1, 1, 0, 1, 1, 1],
      result: 3,
    },
    {
      nums: [1, 1, 0, 1],
      result: 2,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.strictEqual(findMaxConsecutiveOnes(nums), result);
    });
  });
});
