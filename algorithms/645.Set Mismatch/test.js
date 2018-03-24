'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findErrorNums } = require('./');

describe('#findErrorNums', () => {
  const tests = [
    {
      nums: [1, 2, 2, 4],
      result: [2, 3],
    },
    {
      nums: [3, 2, 3, 4, 6, 5],
      result: [3, 1],
    },
    {
      nums: [1, 5, 3, 2, 2, 7, 6, 4, 8, 9],
      result: [2, 10],
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(findErrorNums(nums), result);
    });
  });
});
