'use strict';

module.exports = { trap, trap2, trap3 };

/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  let i = -1;
  const l = height.length;

  let sum = 0;
  let water = 0;
  let currentHeightIndex = ++i;
  let currentHeight = height[i];
  let secondHeightest = 0;
  while (++i < l) {
    const h = height[i];
    if (h >= currentHeight) {
      sum += water;
      water = 0;
      currentHeight = h;
      currentHeightIndex = i;
      secondHeightest = 0;
    } else {
      water += currentHeight - h;
      secondHeightest = Math.max(secondHeightest, h);
    }
  }
  if (water > 0) {
    height[currentHeightIndex] = secondHeightest;
    sum += trap(height.slice(currentHeightIndex));
  }
  return sum;
}

function trap2(height) {
  const l = height.length;

  let highest = 0;
  let highestIndex = 0;
  for (let i = 0; i < l; i++) {
    const h = height[i];
    if (highest < h) {
      highest = h;
      highestIndex = i;
    }
  }

  let sum = 0;
  let prevHeight = 0;
  for (let i = 0; i < highestIndex; i++) {
    const h = height[i];
    if (prevHeight < h) {
      prevHeight = h;
    }
    sum += prevHeight - h;
  }

  prevHeight = 0;
  for (let i = l - 1; i > highestIndex; i--) {
    const h = height[i];
    if (prevHeight < h) {
      prevHeight = h;
    }
    sum += prevHeight - h;
  }
  return sum;
}

/**
 * @param {number[]} height
 * @return {number}
 */
function trap3(height) {
  let water = 0;
  const stack = [];
  for (const [i, h] of height.entries()) {
    while (stack.length > 1 && h > stack[stack.length - 1].height) {
      const mid = stack.pop();
      const left = stack[stack.length - 1];
      const width = i - left.index - 1;
      const height = Math.max(0, Math.min(h, left.height) - mid.height);
      water += width * height;
    }
    stack.push({ index: i, height: h });
  }
  return water;
}

/**
 * @param {number[]} height
 * @return {number}
 */
function trap4(height) {
  let left = 0;
  let right = height.length - 1;
  const max = { left: 0, right: 0 };
  let result = 0;
  while (left <= right) {
    const hl = height[left];
    const hr = height[right];
    if (hl <= hr) {
      max.left = Math.max(max.left, hl);
      result += max.left - hl;
      left++;
    } else {
      max.right = Math.max(max.right, hr);
      result += max.right - hr;
      right--;
    }
  }
  return result;
}
