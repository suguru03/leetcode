'use strict';

const assert = require('assert');
const _ = require('lodash');
const { removeElement } = require('./');

describe('#removeElement', () => {

  const tests = [{
    nums: [3, 2, 2, 3],
    val: 3,
    result: 2,
    result2: [2, 2]
  }, {
    nums: [1, 1, 1],
    val: 1,
    result: 0,
    result2: []
  }];

  _.forEach(tests, ({ nums, val, result, result2 }) => {
    it(`[${nums}], val:${val} -> [${result2}]`, () => {
      assert.strictEqual(removeElement(nums, val), result);
      assert.deepEqual(nums, result2);
    });
  });
});
