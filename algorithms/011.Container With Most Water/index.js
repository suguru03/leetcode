'use strict';

module.exports = { maxArea };

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  let n1, n2;
  while (left < right) {
    n1 = height[left];
    n2 = height[right];
    if (n1 < n2) {
      max = Math.max(max, n1 * (right - left++));
    } else {
      max = Math.max(max, n2 * (right-- - left));
    }
  }
  return max;
}
