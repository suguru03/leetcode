'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxSumDivThree } = require('./');

describe('#maxSumDivThree', () => {
  const tests = [
    {
      nums: [3, 6, 5, 1, 8],
      result: 18,
    },
    {
      nums: [3, 1, 2],
      result: 6,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(maxSumDivThree(nums), result);
    });
  });
});
