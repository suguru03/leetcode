'use strict';

module.exports = { groupThePeople, groupThePeople2 };

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
function groupThePeople(groupSizes) {
  const result = [];
  const indexMap = new Map();
  for (const [i, n] of groupSizes.entries()) {
    if (!indexMap.has(n)) {
      indexMap.set(n, result.push([]) - 1);
    }
    if (result[indexMap.get(n)].push(i) === n) {
      indexMap.delete(n);
    }
  }
  return result;
}

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
function groupThePeople2(groupSizes) {
  const result = [];
  const map = new Map();
  for (const [i, n] of groupSizes.entries()) {
    const list = map.get(n) || [];
    const next = list.push(i) === n;
    map.set(n, next ? [] : list);
    next && result.push(list);
  }
  return result;
}
