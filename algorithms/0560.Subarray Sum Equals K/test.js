'use strict';

const assert = require('assert');
const _ = require('lodash');

const { subarraySum } = require('./');

describe('#subarraySum', () => {
  const tests = [
    {
      nums: [1, 1, 1],
      k: 2,
      result: 2,
    },
    {
      nums: [1],
      k: 1,
      result: 1,
    },
    {
      nums: [-1, -1, 1],
      k: 0,
      result: 1,
    },
    {
      nums: [-1, -1, 1, -1],
      k: 0,
      result: 2,
    },
  ];

  _.forEach(tests, ({ nums, k, result }) => {
    it(`${nums}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(subarraySum(nums, k), result);
    });
  });
});
