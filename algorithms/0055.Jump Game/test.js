'use strict';

const assert = require('assert');
const _ = require('lodash');

const { canJump } = require('./');

describe('#canJump', () => {
  const tests = [
    {
      nums: [2, 3, 1, 1, 4],
      result: true,
    },
    {
      nums: [3, 2, 1, 0, 4],
      result: false,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(canJump(nums), result);
    });
  });
});
