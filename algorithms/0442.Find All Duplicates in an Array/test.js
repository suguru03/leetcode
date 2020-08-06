'use strict';

const assert = require('assert');
const _ = require('lodash');

const { findDuplicates } = require('./');

describe('#findDuplicates', () => {
  const tests = [
    {
      nums: [4, 3, 2, 7, 8, 2, 3, 1],
      result: [2, 3],
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(findDuplicates(nums), result);
    });
  });
});
