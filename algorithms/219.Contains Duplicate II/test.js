'use strict';

const assert = require('assert');
const _ = require('lodash');
const { containsNearbyDuplicate } = require('./');

describe('#containsNearbyDuplicate', () => {

  const tests = [{
    nums: [],
    k: 0,
    result: false
  }, {
    nums: [1, 2, 3, 4, 2],
    k: 2,
    result: false
  }, {
    nums: [1, 2, 3, 4, 2],
    k: 3,
    result: true
  }];

  _.forEach(tests, ({ nums, k, result }) => {
    it(`[${nums}] ${k} -> ${result}`, () => {
      assert.strictEqual(containsNearbyDuplicate(nums, k), result);
    });
  });
});
