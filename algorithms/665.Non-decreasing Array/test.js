'use strict';

const assert = require('assert');
const _ = require('lodash');
const { checkPossibility } = require('./');

describe('#checkPossibility', () => {
  const tests = [
    {
      nums: [4, 2, 3],
      result: true,
    },
    {
      nums: [4, 2, 1],
      result: false,
    },
    {
      nums: [4, 5, 2, 6, 7],
      result: true,
    },
    {
      nums: [-1, 4, 2, 3],
      result: true,
    },
    {
      nums: [3, 4, 2, 3],
      result: false,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`[${nums}] -> ${result}`, () => {
      assert.strictEqual(checkPossibility(nums), result);
    });
  });
});
