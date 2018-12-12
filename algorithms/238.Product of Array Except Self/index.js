'use strict';

module.exports = { productExceptSelf, productExceptSelf2 };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const n = nums.length;
  const leftProd = Array(n).fill(1);
  const rightProd = Array(n).fill(1);
  let left = 1;
  let right = 1;
  for (let il = 0; il < n; il++) {
    const ir = n - il - 1;
    left *= nums[il];
    right *= nums[ir];
    leftProd[il] = left;
    rightProd[ir] = right;
  }
  for (let i = 0; i < n; i++) {
    const l = leftProd[i - 1];
    const r = rightProd[i + 1];
    switch (i) {
      case 0:
        nums[i] = r;
        break;
      case n - 1:
        nums[i] = l;
        break;
      default:
        nums[i] = l * r;
        break;
    }
  }
  return nums;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf2(nums) {
  let n = nums.length;
  const ans = Array(n);
  let left = 1;
  for (let i = 0; i < n; i++) {
    ans[i] = nums[i] * left;
    left *= nums[i];
  }
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    const l = i === 0 ? 1 : ans[i - 1];
    ans[i] = right * l;
    right *= nums[i];
  }
  return ans;
}
