'use strict';

const assert = require('assert');
const _ = require('lodash');
const { longestConsecutive } = require('./');

describe('#longestConsecutive', () => {
  const tests = [
    {
      nums: [100, 4, 200, 1, 3, 2],
      result: 4,
    },
    {
      nums: [],
      result: 0,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(longestConsecutive(nums), result);
    });
  });
});
