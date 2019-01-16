'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isPowerOfFour } = require('./');

describe('#isPowerOfFour', () => {
  const tests = [
    {
      nums: 16,
      result: true,
    },
    {
      nums: 5,
      result: false,
    },
    {
      nums: 128,
      result: false,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.strictEqual(isPowerOfFour(nums), result);
    });
  });
});
