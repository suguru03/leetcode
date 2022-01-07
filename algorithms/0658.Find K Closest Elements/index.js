'use strict';

module.exports = { findClosestElements, findClosestElements2, findClosestElements3, findClosestElements4 };

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements(arr, k, x) {
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    const diff = i - start;
    if (n < x) {
      if (diff >= k) {
        start++;
      }
      continue;
    }
    if (diff < k) {
      continue;
    }
    const ns = arr[start];
    if (x - ns <= n - x) {
      return arr.slice(start, i);
    }
    start++;
  }
  return arr.slice(start);
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements2(arr, k, x) {
  return arr
    .sort(compare)
    .slice(0, k)
    .sort((n1, n2) => n1 - n2);
  function compare(n1, n2) {
    const a1 = Math.abs(x - n1);
    const a2 = Math.abs(x - n2);
    return a1 === a2 ? n1 - n2 : a1 - a2;
  }
}

function findClosestElements3(arr, k, x) {
  let low = 0;
  let high = arr.length - 1;
  while (low + 1 < high) {
    const mid = ((low + high) / 2) | 0;
    if (arr[mid] < x) {
      low = mid;
    } else {
      high = mid;
    }
  }
  let left = low;
  let right = left;
  let diff = 0;
  k--;
  while (k) {
    while (k && left > 0 && x - arr[left - 1] === diff) {
      k--;
      left--;
    }
    while (k && right < arr.length && arr[right + 1] - x === diff) {
      k--;
      right++;
    }
    diff++;
  }
  return arr.slice(left, right + 1);
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements4(arr, k, x) {
  let r = 0;
  let l = arr.length - k;
  while (r < l) {
    const m = (l + (r - l) / 2) | 0;
    if (x - arr[m] > arr[m + k] - x) {
      r = m + 1;
    } else {
      l = m;
    }
  }
  return arr.slice(r, r + k);
}
