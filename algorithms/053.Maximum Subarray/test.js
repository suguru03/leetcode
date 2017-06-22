'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxSubArray } = require('./');

describe('#maxSubArray', () => {

  const tests = [{
    nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    result: 6
  }, {
    nums: [-1, -2, -3],
    result: -1
  }, {
    nums: [-1],
    result: -1
  }, {
    nums: [0, -1],
    result: 0
  }, {
    nums: [0, 1, 2, 3, 4, 5],
    result: 15
  }, {
    nums: [-1, -2, -3, 1, -4],
    result: 1
  }, {
    nums: [1, -1, 1],
    result: 1
  }, {
    nums: [1, 2],
    result: 3
  }];

  _.forEach(tests, ({ nums, result }) => {
    it(`[${nums}] -> ${result}`, () => {
      assert.strictEqual(maxSubArray(nums), result);
    });
  });
});
