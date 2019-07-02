'use strict';

module.exports = { findInMountainArray };

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *
 *     @param {integer} index
 *     @return {integer}
 *     this.get = function(index) {
 *         ...
 *     }
 *
 *     @return {integer}
 *     this.length = function() {
 *         ...
 *     }
 * }
 */
/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
function findInMountainArray(target, mountainArr) {
  const length = mountainArr.length();
  const cache = Array(length).fill(-1);

  // find the top
  let l = 0;
  let r = length - 1;
  while (l < r) {
    const i1 = ((l + r) / 2) | 0;
    const i2 = i1 + 1;
    const n1 = get(i1);
    const n2 = get(i2);
    if (n1 < n2) {
      l = i2;
    } else {
      r = i1;
    }
  }
  const head = l;

  // left
  l = 0;
  r = head;
  while (l <= r) {
    const i = ((l + r) / 2) | 0;
    const n = get(i);
    if (n === target) {
      return i;
    }
    if (n < target) {
      l = i + 1;
    } else {
      r = i - 1;
    }
  }

  // right
  l = head;
  r = length - 1;
  while (l <= r) {
    const i = ((l + r) / 2) | 0;
    const n = get(i);
    if (n === target) {
      return i;
    }
    if (n < target) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
  return -1;

  function get(i) {
    if (cache[i] === -1) {
      cache[i] = mountainArr.get(i);
    }
    return cache[i];
  }
}
