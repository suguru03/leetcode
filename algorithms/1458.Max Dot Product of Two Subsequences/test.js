'use strict';

const assert = require('assert');
const _ = require('lodash');

const { maxDotProduct } = require('./');

describe('#maxDotProduct', () => {
  const tests = [
    {
      nums1: [2, 1, -2, 5],
      nums2: [3, 0, -6],
      result: 18,
    },
    {
      nums1: [7, 2, 2, -1, -1, 1, -4, 7, 6],
      nums2: [-7, -9, -1, 2, 2, 5, -7, 2, -7, 5],
      result: 108,
    },
  ];

  _.forEach(tests, ({ nums1, nums2, result }) => {
    it(`${nums1}, ${nums2} -> ${result}`, () => {
      assert.deepStrictEqual(maxDotProduct(nums1, nums2), result);
    });
  });
});
