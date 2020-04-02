'use strict';

const assert = require('assert');
const _ = require('lodash');

const { missingNumber } = require('./');

describe('#missingNumber', () => {
  const tests = [
    {
      nums: [0, 1, 2, 4],
      result: 3,
    },
    {
      nums: [4, 3, 1, 0],
      result: 2,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`[${nums}] -> ${result}`, () => {
      assert.strictEqual(missingNumber(nums), result);
    });
  });
});
