'use strict';

const assert = require('assert');
const _ = require('lodash');

const { sortedArrayToBST } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#sortedArrayToBST', () => {
  const tests = [
    {
      nums: [1, 2, 3, 4, 5, 6, 7],
      result: [4, 2, 6, 1, 3, 5, 7],
    },
    {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      result: [5, 2, 7, 1, 3, 6, 8, null, null, null, 4, null, null, null, 9],
    },
    {
      nums: [0, 1, 2, 3, 4, 5, 6, 7],
      result: [4, 2, 6, 1, 3, 5, 7, 0],
    },
  ];

  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ nums, result, _result }) => {
    it(`[${nums}] -> [${_result}]`, () => {
      assert.deepEqual(sortedArrayToBST(nums), result);
    });
  });
});
