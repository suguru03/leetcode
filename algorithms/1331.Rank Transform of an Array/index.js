'use strict';

module.exports = { arrayRankTransform };

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
  return arr.map(num => rankMap.get(num));
}
