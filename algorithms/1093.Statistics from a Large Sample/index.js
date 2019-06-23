'use strict';

module.exports = { sampleStats };

/**
 * @param {number[]} count
 * @return {number[]}
 */
function sampleStats(count) {
  let max = 0;
  let min = Infinity;
  let total = 0;
  let sum = 0;
  let mode = -1;
  const vMax = Math.max(...count);
  for (const [i, n] of count.entries()) {
    if (n === 0) {
      continue;
    }
    max = i;
    min = Math.min(min, i);
    total += n;
    sum += i * n;
    if (n === vMax) {
      mode = i;
    }
  }
  const mean = sum / total;

  // median
  let target = Math.floor(total / 2);
  const candidates = [];
  for (let [i, n] of count.entries()) {
    if (n === 0) {
      continue;
    }
    if (candidates.length) {
      candidates.push(i);
      break;
    }
    target -= n;
    if (target > 0) {
      continue;
    }
    if (target < 0) {
      candidates.push(i, i);
      break;
    }
    candidates.push(i);
  }
  const median = total % 2 === 1 ? candidates[0] : candidates.reduce((s, n) => s + n) / 2;
  return [min, max, mean, median, mode];
}
