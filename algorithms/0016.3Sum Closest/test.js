'use strict';

const assert = require('assert');
const _ = require('lodash');
const { threeSumClosest } = require('./');

describe('#threeSumClosest', () => {
  const tests = [
    {
      nums: [-1, 2, 1, -4],
      target: 1,
      result: 2,
    },
    {
      nums: [1, 2, 4, 8, 16, 32, 64, 128],
      target: 82,
      result: 82,
    },
    {
      nums: [1, 1, 1, 0],
      target: -100,
      result: 2,
    },
  ];

  _.forEach(tests, ({ nums, target, result }) => {
    it(`${nums}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(threeSumClosest(nums, target), result);
    });
  });
});
