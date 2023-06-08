'use strict';

module.exports = { canMakeArithmeticProgression, canMakeArithmeticProgression2 };

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

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canMakeArithmeticProgression2(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const diff = (max - min) / (arr.length - 1);
  if (diff === 0) {
    return true;
  }

  const taken = new Set();
  for (const n of arr) {
    const div = (n - min) / diff;
    if (div % 1 !== 0 || taken.has(div)) {
      return false;
    }
    taken.add(div);
  }

  return true;
}
