'use strict';

module.exports = { minTaps, minTaps2 };

/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
function minTaps(n, ranges) {
  const taps = ranges
    .map((range, index) => ({
      from: Math.max(0, index - range),
      to: Math.min(n, index + range),
      range,
    }))
    .sort((t1, t2) => t1.from - t2.from || t2.to - t1.to);
  let [{ from, to }] = taps;
  if (from !== 0) {
    return -1;
  }
  let i = 0;
  let count = 1;
  while (i < n) {
    const tap = taps[i++];
    if (tap.to <= to) {
      continue;
    }
    if (tap.from > to) {
      return -1;
    }
    let next = tap.to;
    while (i < n && taps[i].from <= to) {
      next = Math.max(next, taps[i++].to);
    }
    count++;
    to = next;
  }
  return to === n ? count : -1;
}

/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
function minTaps2(n, ranges) {
  const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (const [index, range] of ranges.entries()) {
    const from = Math.max(0, index - range);
    const to = Math.min(n, index + range);
    for (let i = from + 1; i <= to; i++) {
      dp[i] = Math.min(dp[i], dp[from] + 1);
    }
  }
  return dp[n] === Infinity ? -1 : dp[n];
}
