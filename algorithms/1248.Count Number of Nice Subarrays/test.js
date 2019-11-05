'use strict';

const assert = require('assert');
const _ = require('lodash');
const { numberOfSubarrays } = require('./');

describe('#numberOfSubarrays', () => {
  const tests = [
    {
      nums: [1, 1, 2, 1, 1],
      k: 3,
      result: 2,
    },
    {
      nums: [2, 4, 6],
      k: 1,
      result: 0,
    },
    {
      nums: [2, 2, 2, 1, 2, 2, 1, 2, 2, 2],
      k: 2,
      result: 16,
    },
  ];

  _.forEach(tests, ({ nums, k, result }) => {
    it(`${nums}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(numberOfSubarrays(nums, k), result);
    });
  });
});
