'use strict';

const _ = require('lodash');

module.exports = { findMaxAverage };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  let sum = _.sum(nums.slice(0, k));
  let max = sum / k;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    max = Math.max(max, sum / k);
  }
  return max;
}
