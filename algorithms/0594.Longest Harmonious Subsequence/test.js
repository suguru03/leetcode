'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findLHS } = require('./');

describe('#findLHS', () => {
  const tests = [
    {
      nums: [1, 3, 2, 2, 5, 2, 3, 7],
      result: 5,
    },
    {
      nums: [1, 2, 3, 4],
      result: 2,
    },
    {
      nums: [1, 1, 1, 1],
      result: 0,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(findLHS(nums), result);
    });
  });
});
