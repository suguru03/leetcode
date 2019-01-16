'use strict';

const assert = require('assert');
const _ = require('lodash');
const { merge } = require('./');

describe('#merge', () => {
  const tests = [
    {
      nums1: [1],
      m: 1,
      nums2: [],
      n: 0,
      _nums1: [1],
    },
    {
      nums1: [1, 2, 3, 4, 5],
      m: 4,
      nums2: [6, 7, 8, 9, 10],
      n: 3,
      _nums1: [1, 2, 3, 4, 6, 7, 8],
    },
    {
      nums1: [1, 2, 3, 4, 5],
      m: 4,
      nums2: [6, 7, 8, 9, 10],
      n: 0,
      _nums1: [1, 2, 3, 4, 5],
    },
    {
      nums1: [2, 1],
      m: 1,
      nums2: [1],
      n: 1,
      _nums1: [1, 2],
    },
    {
      nums1: [1, 3, 4, 6, 9],
      m: 4,
      nums2: [2, 3, 5, 7],
      n: 4,
      _nums1: [1, 2, 3, 3, 4, 5, 6, 7],
    },
    {
      nums1: [-1, 0, 0, 3, 3, 3, 0, 0, 0],
      m: 6,
      nums2: [1, 2, 2],
      n: 3,
      _nums1: [-1, 0, 0, 1, 2, 2, 3, 3, 3],
    },
  ];

  _.forEach(tests, ({ nums1, m, nums2, n, _nums1 }) => {
    it(`[${nums1}], m: ${m}, [${nums2}], n: ${n} -> [${_nums1}]`, () => {
      merge(nums1, m, nums2, n);
      assert.deepEqual(nums1, _nums1);
    });
  });
});
