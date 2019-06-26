'use strict';

const assert = require('assert');
const _ = require('lodash');
const { fourSum } = require('./');

describe('#fourSum', () => {
  const tests = [
    {
      nums: [1, 0, -1, 0, -2, 2],
      target: 0,
      result: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]],
    },
    {
      nums: [1, 1, 0, -1, 0, -2, 2],
      target: 0,
      result: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-2, 0, 1, 1], [-1, 0, 0, 1]],
    },
  ];

  _.forEach(tests, ({ nums, target, result }) => {
    it(`${nums}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(fourSum(nums, target), result);
    });
  });
});
