'use strict';

module.exports = { largestOverlap };

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
function largestOverlap(A, B) {
  let max = 0;
  const size = A.length;
  const aList = A.flatMap((row, y) => row.map((val, x) => ({ x, y, val }))).filter(obj => obj.val === 1);
  for (let dy = -size; dy < size; dy++) {
    for (let dx = -size; dx < size; dx++) {
      max = Math.max(max, count(dx, dy));
    }
  }
  return max;

  function count(dx, dy) {
    let count = 0;
    for (let index = 0; index < aList.length; index++) {
      const rem = aList.length - index;
      if (max >= rem + count) {
        break;
      }
      const a = aList[index];
      const x = a.x + dx;
      const y = a.y + dy;
      if (!B[y] || !B[y][x]) {
        continue;
      }
      count++;
    }
    return count;
  }
}
