'use strict';

const assert = require('assert');
const _ = require('lodash');
const { createTargetArray } = require('./');

describe('#createTargetArray', () => {
  const tests = [
    {
      nums: [0, 1, 2, 3, 4],
      index: [0, 1, 2, 2, 1],
      result: [0, 4, 1, 3, 2],
    },
    {
      nums: [0, 1, 2, 3, 4],
      index: [0, 0, 1, 3, 1],
      result: [1, 4, 2, 0, 3],
    },
  ];

  _.forEach(tests, ({ nums, index, result }) => {
    it(`${nums}, ${index} -> ${result}`, () => {
      assert.deepStrictEqual(createTargetArray(nums, index), result);
    });
  });
});
