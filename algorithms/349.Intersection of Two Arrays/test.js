'use strict';

const assert = require('assert');
const _ = require('lodash');
const { intersection } = require('./');

describe('#intersection', () => {

  const tests = [{
    nums1: [1, 2, 2, 1],
    nums2: [2, 2],
    result: [2]
  }, {
    nums1: [1, 2, 2, 1],
    nums2: [2, 2, 2],
    result: [2]
  }];

  _.forEach(tests, ({ nums1, nums2, result }) => {
    it(`${nums1}, ${nums2} -> ${result}`, () => {
      assert.deepStrictEqual(intersection(nums1, nums2), result);
    });
  });
});
