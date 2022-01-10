'use strict';

const assert = require('assert');

const { intersect } = require('./');

describe('#intersect', () => {
  const tests = [
    {
      nums1: [1, 2, 2, 1],
      nums2: [2, 2],
      result: [2, 2],
    },
  ];

  for (const { nums1, nums2, result } of tests) {
    it(`${nums1}, ${nums2} -> ${result}`, () => {
      assert.deepStrictEqual(intersect(nums1, nums2), result);
    });
  }
});
