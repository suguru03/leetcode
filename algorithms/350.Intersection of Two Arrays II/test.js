'use strict';

const assert = require('assert');
const _ = require('lodash');
const { intersect } = require('./');

describe('#intersect', () => {

  const tests = [{
    nums1: [1, 2, 2, 1],
    nums2: [2, 2],
    result: [2, 2]
  }];

  _.forEach(tests, ({ nums1, nums2, result }) => {
    it(`${nums1}, ${nums2} -> ${result}`, () => {
      assert.deepEqual(intersect(nums1, nums2), result);
    });
  });
});
