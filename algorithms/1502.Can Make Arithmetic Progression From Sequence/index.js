'use strict';

module.exports = { canMakeArithmeticProgression };

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canMakeArithmeticProgression(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const gap = (max - min) / (arr.length - 1);
  let i = 0;
  while (i < arr.length) {
    const num = arr[i];
    if (num === min + i * gap) {
      i++;
      continue;
    }
    const j = (num - min) / gap;
    if (j < i || j % 1 !== 0) {
      return false;
    }
    [arr[i], arr[j]] = [arr[j], num];
  }
  return true;
}
