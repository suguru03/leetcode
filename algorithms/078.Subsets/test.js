'use strict';

const assert = require('assert');
const _ = require('lodash');
const { subsets } = require('./');

describe('#subsets', () => {
  const tests = [
    {
      nums: [1, 2, 3],
      result: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]],
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(subsets(nums), result);
    });
  });
});
