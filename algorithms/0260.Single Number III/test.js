'use strict';

const assert = require('assert');
const _ = require('lodash');

const { singleNumber } = require('./');

describe('#singleNumber', () => {
  const tests = [
    {
      nums: [1, 2, 1, 3, 2, 5],
      result: [5, 3],
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(singleNumber(nums), result);
    });
  });
});
