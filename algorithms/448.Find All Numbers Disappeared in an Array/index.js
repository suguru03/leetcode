'use strict';

module.exports = {
  findDisappearedNumbers,
  findDisappearedNumbers2,
  findDisappearedNumbers3,
  findDisappearedNumbers4
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  const l = nums.length;
  const array = Array(l - 1);
  for (let i = 0; i < l; i++) {
    array[nums[i]] = true;
  }
  const result = [];
  for (let i = 1; i <= l; i++) {
    if (array[i] === undefined) {
      result.push(i);
    }
  }
  return result;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers2(nums) {
  const l = nums.length;
  const hash = {};
  for (let i = 0; i < l; i++) {
    hash[nums[i]] = true;
  }
  const result = [];
  for (let i = 1; i <= l; i++) {
    if (hash[i] === undefined) {
      result.push(i);
    }
  }
  return result;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers3(nums) {
  const l = nums.length;
  for (let i = 0; i < l; i++) {
    fill(nums, nums[i]);
  }
  const result = [];
  for (let i = 0; i < l; i++) {
    if (nums[i] !== true) {
      result.push(i + 1);
    }
  }
  return result;
}

function fill(nums, n1) {
  const i1 = n1 - 1;
  if (n1 === true || nums[i1] === true) {
    return;
  }
  const n2 = nums[i1];
  nums[i1] = true;
  return fill(nums, n2);
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers4(nums) {
  const l = nums.length;
  for (let i = 0; i < l; i++) {
    const index = Math.abs(nums[i]) - 1;
    nums[index] = Math.min(nums[index], -nums[index]);
  }
  const result = [];
  for (let i = 0; i < l; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
}
