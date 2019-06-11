/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *
 *     @param {integer} index
 *     @return {integer}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {integer}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
  let length = mountainArr.length();
  let searched = Array(length).fill(-1);

  // find the top
  let l = 0;
  let r = length - 1;
  while (l < r) {
    const i1 = ((l + r) / 2) | 0;
    const i2 = i1 + 1;
    const m1 = get(i1);
    const m2 = get(i2);
    if (m1 < m2) {
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
    if (searched[i] !== -1) {
      return searched[i];
    }
    const v = mountainArr.get(i);
    searched[i] = v;
    return v;
  }
};

class M {
  constructor(arr) {
    this.arr = arr;
    this.count = 0;
  }
  get(i) {
    this.count++;
    return this.arr[i];
  }
  length() {
    this.count++;
    return this.arr.length;
  }
}
console.log(findInMountainArray(3, new M([1, 2, 3, 4, 5, 3, 1])));
console.log(findInMountainArray(2, new M([1, 3, 4, 5, 4, 3, 2, 1])));
console.log(findInMountainArray(3, new M([0, 1, 2, 4, 2, 1])));
