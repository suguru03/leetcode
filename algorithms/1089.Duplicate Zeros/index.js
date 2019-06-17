'use strict';

module.exports = { duplicateZeros, duplicateZeros2 };

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
  const queue = [];
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (queue.length > 0) {
      arr[i] = queue.shift();
      queue.push(n);
    }
    if (n === 0) {
      queue.push(n);
    }
  }
}

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros2(arr) {
  let l = arr.length;
  let j = 0;
  for (const n of arr) {
    j += n === 0 ? 2 : 1;
  }
  for (let i = l - 1; i >= 0; i--) {
    if (--j < l) {
      arr[j] = arr[i];
    }
    if (arr[i] === 0 && --j < l) {
      arr[j] = 0;
    }
  }
}
