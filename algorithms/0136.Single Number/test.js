'use strict';

const assert = require('assert');
const _ = require('lodash');
const { singleNumber } = require('./');

describe('#singleNumber', () => {
  const tests = [
    {
      nums: [1],
      result: 1,
    },
    {
      nums: [1, 2, 1],
      result: 2,
    },
    {
      nums: [4, 3, 3, 4, 2],
      result: 2,
    },
    {
      nums: [-2, -1, 1, 1, -2],
      result: -1,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.strictEqual(singleNumber(nums), result);
    });
  });
});
