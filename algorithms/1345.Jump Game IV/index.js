'use strict';

module.exports = { minJumps };

/**
 * @param {number[]} arr
 * @return {number}
 */
function minJumps(arr) {
  if (arr.length === 1) {
    return 0;
  }
  const map = new Map();
  for (const [i, n] of arr.entries()) {
    const indices = map.get(n) ?? [];
    indices.push(i);
    map.set(n, indices);
  }
  let times = 0;
  const queue = [arr.length - 1];
  const memo = Array(arr.length);
  while (queue.length) {
    times++;
    let size = queue.length;
    while (size-- > 0) {
      const i = queue.shift();
      const n = arr[i];
      const indices = map.get(n) ?? [];
      map.delete(n);
      indices.push(i - 1, i + 1);
      for (const j of indices) {
        if (j === 0) {
          return times;
        }
        if (j < 0 || j === arr.length || memo[j]) {
          continue;
        }
        memo[j] = true;
        queue.push(j);
      }
    }
  }
  return -1;
}
