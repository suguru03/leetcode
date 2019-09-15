'use strict';

const assert = require('assert');
const _ = require('lodash');
const { search } = require('./');

describe.only('#search', () => {
  const tests = [
    {
      nums: [4, 5, 6, 7, 0, 1, 2],
      target: 0,
      result: 4,
    },
    {
      nums: [4, 5, 6, 7, 0, 1, 2],
      target: 3,
      result: -1,
    },
    {
      nums: [1],
      target: 0,
      result: -1,
    },
    {
      nums: [1, 3],
      target: 1,
      result: 0,
    },
    {
      nums: [8, 9, 2, 3, 4],
      target: 9,
      result: 1,
    },
    {
      nums: [1, 3, 5],
      target: 1,
      result: 0,
    },
    {
      nums: [5, 1, 2, 3, 4],
      target: 4,
      result: 4,
    },
    {
      nums: [2, 4, 7, 9, 0],
      target: 9,
      result: 3,
    },
  ];

  _.forEach(tests, ({ nums, target, result }) => {
    it(`${nums}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(search(nums, target), result);
    });
  });
});
