'use strict';

const assert = require('assert');
const _ = require('lodash');
const { kSmallestPairs } = require('./');

describe('#kSmallestPairs', () => {
  const tests = [
    {
      nums1: [1, 7, 11],
      nums2: [2, 4, 6],
      k: 3,
      result: [[1, 2], [1, 4], [1, 6]],
    },
    {
      nums1: [1, 1, 2],
      nums2: [1, 2, 3],
      k: 2,
      result: [[1, 1], [1, 1]],
    },
    {
      nums1: [1, 1, 2],
      nums2: [1, 2, 3],
      k: 10,
      result: [[1, 1], [1, 1], [1, 2], [1, 2], [2, 1], [1, 3], [2, 2], [1, 3], [2, 3]],
    },
    {
      nums1: [1, 2, 3],
      nums2: [1, 1, 2],
      k: 10,
      result: [[1, 1], [1, 1], [2, 1], [1, 2], [2, 1], [2, 2], [3, 1], [3, 1], [3, 2]],
    },
    {
      nums1: [1, 2],
      nums2: [3],
      k: 3,
      result: [[1, 3], [2, 3]],
    },
    {
      nums1: [],
      nums2: [],
      k: 3,
      result: [],
    },
  ];

  _.forEach(tests, ({ nums1, nums2, k, result }) => {
    it(`${nums1}, ${nums2}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(kSmallestPairs(nums1, nums2, k), result);
    });
  });
});
