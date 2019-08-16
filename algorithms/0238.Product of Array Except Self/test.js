'use strict';

const assert = require('assert');
const _ = require('lodash');
const { productExceptSelf } = require('./');

describe('#productExceptSelf', () => {
  const tests = [
    {
      nums: [1, 2, 3, 4],
      result: [24, 12, 8, 6],
    },
    {
      nums: [0, 0],
      result: [0, 0],
    },
    {
      nums: [0, 4, 0],
      result: [0, 0, 0],
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(productExceptSelf(nums), result);
    });
  });
});
