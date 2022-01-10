'use strict';

const assert = require('assert');

const { intersection } = require('./');

describe('#intersection', () => {
  const tests = [
    {
      nums1: [1, 2, 2, 1],
      nums2: [2, 2],
      result: [2],
    },
    {
      nums1: [1, 2, 2, 1],
      nums2: [2, 2, 2],
      result: [2],
    },
    {
      nums1: [4, 9, 5],
      nums2: [9, 4, 9, 8, 4],
      result: [4, 9],
    },
  ];

  for (const { nums1, nums2, result } of tests) {
    it(`${nums1}, ${nums2} -> ${result}`, () => {
      assert.deepStrictEqual(intersection(nums1, nums2), result);
    });
  }
});
