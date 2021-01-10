'use strict';

module.exports = { waysToSplit, waysToSplit2 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function waysToSplit(nums) {
  let result = 0;
  let mod = 1e9 + 7;
  const size = nums.length;
  for (let i = 1; i < size; i++) {
    nums[i] += nums[i - 1];
  }
  for (let i = 0, j = 0, k = 0; i < size - 2; i++) {
    while (j <= i || (j < size - 1 && nums[j] < nums[i] * 2)) {
      j++;
    }
    while (k < j || (k < size - 1 && nums[k] - nums[i] <= nums[size - 1] - nums[k])) {
      k++;
    }
    result = (result + (k - j)) % mod;
  }
  return result;
}

/**
 * TLE
 * @param {number[]} nums
 * @return {number}
 */
function waysToSplit2(nums) {
  let sum = 0;
  const sums = Array.from(nums, num => {
    sum += num;
    return sum;
  });
  let result = 0;
  let mod = 1e9 + 7;
  for (let i = 1; i < nums.length - 1; i++) {
    if (sums[i - 1] > sum / 3) {
      break;
    }
    const right = findRight(i, nums.length);
    if (right <= i) {
      continue;
    }
    const left = findLeft(i, right);
    if (left >= right) {
      continue;
    }
    result = (result + right - left) % mod;
  }
  return result;

  function findRight(left, right) {
    const leftSum = sums[left - 1];
    while (left < right) {
      const mid = (left + (right - right) / 2) | 0;
      const sumL = sums[mid] - leftSum;
      const sumR = sum - sumL - leftSum;
      if (sumL <= sumR) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }

  function findLeft(left, right) {
    const leftSum = sums[left - 1];
    while (left < right) {
      const mid = (left + (right - right) / 2) | 0;
      const sumL = sums[mid] - leftSum;
      if (sumL < leftSum) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
}
