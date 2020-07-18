'use strict';

const assert = require('assert');
const _ = require('lodash');

const { maxProduct } = require('./');

describe('#maxProduct', () => {
  const tests = [
    {
      nums: [2, 3, -2, 4],
      result: 6,
    },
    {
      nums: [-2, 0, -1],
      result: 0,
    },
    {
      nums: [0, 2],
      result: 2,
    },
    {
      nums: [2, -5, -2, -4, 3],
      result: 24,
    },
    {
      nums: [-2],
      result: -2,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(maxProduct(nums), result);
    });
  });
});
