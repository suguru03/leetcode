'use strict';

module.exports = { largestValsFromLabels };

/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
function largestValsFromLabels(values, labels, num_wanted, use_limit) {
  const sorted = values.map((v, i) => [v, i]).sort(([v1], [v2]) => v2 - v1);
  let sum = 0;
  const countMap = {};
  for (const [v, i] of sorted) {
    const l = labels[i];
    if (countMap[l] >= use_limit) {
      continue;
    }
    sum += v;
    countMap[l] = ~~countMap[l] + 1;
    if (--num_wanted === 0) {
      break;
    }
  }
  return sum;
}
