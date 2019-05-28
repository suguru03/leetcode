'use strict';

const assert = require('assert');
const _ = require('lodash');
const { search } = require('./');

describe('#search', () => {
  const tests = [
    {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 9,
      result: 4,
    },
    {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 2,
      result: -1,
    },
  ];

  _.forEach(tests, ({ nums, target, result }) => {
    it(`${nums}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(search(nums, target), result);
    });
  });
});
