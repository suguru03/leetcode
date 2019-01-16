'use strict';

module.exports = { trap, trap2 };

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
