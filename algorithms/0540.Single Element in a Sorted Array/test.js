'use strict';

const assert = require('assert');
const _ = require('lodash');
const { singleNonDuplicate } = require('./');

describe('#singleNonDuplicate', () => {
  const tests = [
    {
      nums: [1, 1, 2, 2, 3, 4, 4],
      result: 3,
    },
    {
      nums: [1, 1, 2, 3, 3, 4, 4, 8, 8],
      result: 2,
    },
    {
      nums: [3, 3, 7, 7, 10, 11, 11],
      result: 10,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(singleNonDuplicate(nums), result);
    });
  });
});
