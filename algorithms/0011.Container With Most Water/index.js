'use strict';

module.exports = { maxArea };

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    const hl = height[left];
    const hr = height[right];
    max = Math.max(max, Math.min(hl, hr) * (right - left));
    if (hl < hr) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
