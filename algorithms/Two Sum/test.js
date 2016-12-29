'use strict';

const assert = require('assert');
const twoSum = require('./');

describe('#twoSum', () => {

  it('nums = [2, 7, 11, 15], target = 9', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    assert.deepEqual(twoSum(nums, target), [0, 1]);
  });

  it('nums = [3, 2, 4], target = 6', () => {
    const nums = [3, 2, 4];
    const target = 6;
    assert.deepEqual(twoSum(nums, target), [1, 2]);
  });
});
