'use strict';

module.exports = { intervalIntersection };

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
function intervalIntersection(A, B) {
  let ai = 0;
  let bi = 0;
  const result = [];
  while (ai < A.length && bi < B.length) {
    const [as, ae] = A[ai];
    const [bs, be] = B[bi];
    if (ae < bs) {
      ai++;
      continue;
    }
    if (be < as) {
      bi++;
      continue;
    }
    result.push([Math.max(as, bs), Math.min(ae, be)]);
    if (ae < be) {
      ai++;
    } else {
      bi++;
    }
  }
  return result;
}
