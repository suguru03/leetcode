'use strict';

module.exports = { cheapestJump };

/**
 * @param {number[]} A
 * @param {number} B
 * @return {number[]}
 */
function cheapestJump(A, B) {
  const { length: la } = A;
  if (!la) {
    return [];
  }
  const memo = Array(la);
  memo[0] = { val: A[0], path: [1] };
  for (let i = 1; i < la; i++) {
    const value = A[i];
    if (value === -1) {
      continue;
    }
    let min = { val: Infinity, path: [] };
    j: for (let j = 1; j <= B; j++) {
      const data = memo[i - j];
      if (!data || data.val > min.val) {
        continue;
      }
      if (data.val < min.val) {
        min = data;
        continue;
      }
      for (let k = 0; k < min.path.length; k++) {
        const p1 = data.path[k] || Infinity;
        const p2 = min.path[k];
        if (p1 > p2) {
          continue j;
        }
      }
      min = data;
    }
    if (!min.path.length) {
      continue;
    }
    memo[i] = {
      val: min.val + A[i],
      path: min.path.concat(i + 1),
    };
  }
  const last = memo[la - 1];
  return !last ? [] : last.path;
}
