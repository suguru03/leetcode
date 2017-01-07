'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findMedianSortedArrays } = require('./');

describe('#findMedianSortedArrays', () => {

  const tests = [{
    nums1: [1, 2],
    nums2: [2],
    result: 2
  }, {
    nums1: [1, 2],
    nums2: [3, 4],
    result: 2.5
  }, {
    nums1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nums2: [1, 2],
    result: 4
  }, {
    nums1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nums2: [1, 2, 3],
    result: 3.5
  }, {
    nums1: [1, 2, 2, 2, 3, 4, 5],
    nums2: [1, 1, 1, 2, 6, 7, 8],
    result: 2
  }, {
    nums1: [1, 2, 2, 2, 3, 4, 5],
    nums2: [1, 1, 1, 1, 6, 7, 8],
    result: 2
  }, {
    nums1: [1, 1, 1, 1, 6, 7, 8],
    nums2: [1, 2, 2, 2, 3, 4, 5],
    result: 2
  }, {
    nums1: [1],
    nums2: [],
    result: 1
  }, {
    nums1: [1, 2],
    nums2: [],
    result: 1.5
  }, {
    nums1: [],
    nums2: [],
    result: 0
  }];

  _.forEach(tests, ({ nums1, nums2, result }) => {
    const type = (nums1.length + nums2.length) % 2 === 1 ? 'odd' : 'even';
    it(`[${nums1}], [${nums2}] median[${type}]: ${result}`, () => {
      assert.strictEqual(findMedianSortedArrays(nums1, nums2), result);
    });
  });
});
