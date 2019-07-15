'use strict';

module.exports = { relativeSortArray, relativeSortArray2 };

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
  const map = new Map();
  for (const n of arr1) {
    map.set(n, map.get(n) + 1 || 1);
  }
  const result = [];
  for (const n of arr2) {
    let count = map.get(n) || 0;
    while (count--) {
      result.push(n);
    }
    map.delete(n);
  }
  for (let [n, count] of Array.from(map).sort(([n1], [n2]) => n1 - n2)) {
    while (count--) {
      result.push(n);
    }
  }
  return result;
}

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray2(arr1, arr2) {
  const map = new Map();
  arr2.forEach((n, i) => map.set(n, i));
  const res1 = arr1.filter(n => map.has(n)).sort((n1, n2) => map.get(n1) - map.get(n2));
  const res2 = arr1.filter(n => !map.has(n)).sort((n1, n2) => n1 - n2);
  return [...res1, ...res2];
}
