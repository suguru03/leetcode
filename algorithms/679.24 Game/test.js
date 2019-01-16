'use strict';

const assert = require('assert');
const _ = require('lodash');
const { judgePoint24 } = require('./');

describe('#judgePoint24', () => {
  const tests = [
    {
      nums: [4, 1, 8, 7],
      result: true,
    },
    {
      nums: [1, 2, 1, 2],
      result: false,
    },
    {
      nums: [9, 7, 9, 1],
      result: true,
    },
    {
      nums: [1, 3, 4, 6],
      result: true,
    },
    {
      nums: [3, 2, 1, 1],
      result: false,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.strictEqual(judgePoint24(nums), result);
    });
  });
});
