'use strict';

module.exports = { powerfulIntegers };

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
function powerfulIntegers(x, y, bound) {
  const result = new Set();
  for (let x1 = 1; x1 <= bound; x1 *= x) {
    for (let y1 = 1; y1 <= bound; y1 *= y) {
      const val = x1 + y1;
      if (val > bound) {
        break;
      }
      result.add(val);
      if (y === 1) {
        break;
      }
    }
    if (x === 1) {
      break;
    }
  }
  return Array.from(result);
}
