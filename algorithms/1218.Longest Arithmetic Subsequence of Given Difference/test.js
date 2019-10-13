'use strict';

const assert = require('assert');
const _ = require('lodash');
const { longestSubsequence } = require('./');

describe('#longestSubsequence', () => {
  const tests = [
    {
      arr: [1, 2, 3, 4],
      difference: 1,
      result: 4,
    },
    {
      arr: [1, 3, 5, 7],
      difference: 1,
      result: 1,
    },
    {
      arr: [1, 5, 7, 8, 5, 3, 4, 2, 1],
      difference: -2,
      result: 4,
    },
  ];

  _.forEach(tests, ({ arr, difference, result }) => {
    it(`${arr}, ${difference} -> ${result}`, () => {
      assert.deepStrictEqual(longestSubsequence(arr, difference), result);
    });
  });
});
