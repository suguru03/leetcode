'use strict';

const assert = require('assert');
const { rotate } = require('./');

describe('#rotate', () => {

  it('[1, 2, 3, 4, 5, 6, 7], k = 3', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;
    rotate(nums, k);
    assert.deepEqual(nums, [5, 6, 7, 1, 2, 3, 4]);
  });

  it('[1, 2] k=3', () => {
    const nums = [1, 2];
    const k = 3;
    rotate(nums, k);
    assert.deepEqual(nums, [2, 1]);
  });
});
