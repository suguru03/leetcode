'use strict';

const assert = require('assert');
const _ = require('lodash');
const { thirdMax } = require('./');

describe('#thirdMax', () => {
  const tests = [
    {
      nums: [3, 2, 1],
      result: 1,
    },
    {
      nums: [1, 2],
      result: 2,
    },
    {
      nums: [1, 2, 1],
      result: 2,
    },
    {
      nums: [2, 2, 3, 1],
      result: 1,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(thirdMax(nums), result);
    });
  });
});
