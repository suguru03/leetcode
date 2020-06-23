'use strict';

const assert = require('assert');
const _ = require('lodash');

const { singleNumber } = require('./');

describe('#singleNumber', () => {
  const tests = [
    {
      nums: [2, 2, 3, 2],
      result: 3,
    },
    {
      nums: [0, 1, 0, 1, 0, 1, 99],
      result: 99,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(singleNumber(nums), result);
    });
  });
});
