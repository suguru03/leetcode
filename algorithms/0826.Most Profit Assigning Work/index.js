'use strict';

module.exports = { maxProfitAssignment };

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
function maxProfitAssignment(difficulty, profit, worker) {
  const l = difficulty.length;
  const m = {};
  for (let i = 0; i < l; i++) {
    const d = difficulty[i];
    m[d] = Math.max(m[d] || 0, profit[i]);
  }
  const keys = Object.keys(m)
    .map(Number)
    .sort((n1, n2) => n1 - n2);
  worker.sort((n1, n2) => n1 - n2);

  let i = 0;
  let max = 0;
  let result = 0;
  for (const w of worker) {
    while (i < l && w >= keys[i]) {
      max = Math.max(max, m[keys[i++]]);
    }
    result += max;
  }
  return result;
}
