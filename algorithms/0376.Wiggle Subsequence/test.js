'use strict';

const assert = require('assert');

const { wiggleMaxLength } = require('./');

describe('#wiggleMaxLength', () => {
  const tests = [
    {
      nums: [1, 7, 4, 9, 2, 5],
      result: 6,
    },
    {
      nums: [1, 17, 5, 10, 13, 15, 10, 5, 16, 8],
      result: 7,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(wiggleMaxLength(nums), result);
    });
  }
});
