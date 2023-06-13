'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minSubArrayLen } = require('./');

describe('#minSubArrayLen', () => {
  const tests = [
    {
      target: 7,
      nums: [2, 3, 1, 2, 4, 3],
      result: 2,
    },
  ];

  _.forEach(tests, ({ target, nums, result }) => {
    it(`${target}, [${nums}] -> ${result}`, () => {
      assert.strictEqual(minSubArrayLen(target, nums), result);
    });
  });
});
