'use strict';

module.exports = { trap };

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
      water += (currentHeight - h);
      secondHeightest = Math.max(secondHeightest, h);
    }
  }
  if (water > 0) {
    height[currentHeightIndex] = secondHeightest;
    sum += trap(height.slice(currentHeightIndex));
  }
  return sum;
}
