'use strict';

const assert = require('assert');
const _ = require('lodash');

const { minimumSum } = require('./');

describe('#minimumSum', () => {
  const tests = [
    {
      nums: 2932,
      result: 52,
    },
    {
      nums: 4009,
      result: 13,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(minimumSum(nums), result);
    });
  });
});
