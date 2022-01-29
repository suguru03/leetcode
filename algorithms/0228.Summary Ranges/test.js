'use strict';

const assert = require('assert');

const { summaryRanges } = require('./');

describe('#summaryRanges', () => {
  const tests = [
    {
      nums: [0, 1, 2, 4, 5, 7],
      result: ['0->2', '4->5', '7'],
    },
    {
      nums: [0, 2, 3, 4, 6, 8, 9],
      result: ['0', '2->4', '6', '8->9'],
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(summaryRanges(nums), result);
    });
  }
});
