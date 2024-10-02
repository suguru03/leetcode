'use strict';

module.exports = { arrayRankTransform, arrayRankTransform2 };

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayRankTransform(arr) {
  const rankMap = new Map(
    Array.from(new Set(arr))
      .sort((n1, n2) => n1 - n2)
      .map((num, rank) => [num, rank + 1]),
  );
  return arr.map((num) => rankMap.get(num));
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayRankTransform2(arr) {
  const map = new Map(
    _.chain(arr)
      .uniq()
      .sortBy()
      .map((n, i) => [n, i + 1])
      .value(),
  );
  return arr.map((n) => map.get(n));
}
