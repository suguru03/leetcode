'use strict';

const assert = require('assert');

const { fourSumCount } = require('./');

describe('#fourSumCount', () => {
  const tests = [
    {
      nums1: [1, 2],
      nums2: [-2, -1],
      nums3: [-1, 2],
      nums4: [0, 2],
      result: 2,
    },
    {
      nums1: [0],
      nums2: [0],
      nums3: [0],
      nums4: [0],
      result: 1,
    },
    {
      nums1: [0, 0],
      nums2: [0, 0],
      nums3: [0, 0],
      nums4: [0, 0],
      result: 16,
    },
  ];

  for (const { nums1, nums2, nums3, nums4, result } of tests) {
    it(`${nums1}, ${nums2}, ${nums3}, ${nums4} -> ${result}`, () => {
      assert.deepStrictEqual(fourSumCount(nums1, nums2, nums3, nums4), result);
    });
  }
});
