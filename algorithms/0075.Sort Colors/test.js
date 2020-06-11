'use strict';

const assert = require('assert');
const _ = require('lodash');

const { sortColors } = require('./');

describe('#sortColors', () => {
  const tests = [
    {
      nums: [2, 0, 2, 1, 1, 0],
      result: [0, 0, 1, 1, 2, 2],
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      sortColors(nums);
      assert.deepStrictEqual(nums, result);
    });
  });
});
