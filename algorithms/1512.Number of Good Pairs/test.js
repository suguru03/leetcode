'use strict';

const assert = require('assert');
const _ = require('lodash');

const { numIdenticalPairs } = require('./');

describe('#numIdenticalPairs', () => {
  const tests = [
    {
      nums: [1, 2, 3, 1, 1, 3],
      result: 4,
    },
    {
      nums: [1, 1, 1, 1],
      result: 6,
    },
    {
      nums: [1, 2, 3],
      result: 0,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(numIdenticalPairs(nums), result);
    });
  });
});
