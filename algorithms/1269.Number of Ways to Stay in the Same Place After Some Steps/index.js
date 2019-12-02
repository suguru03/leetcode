'use strict';

module.exports = { numWays };

/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
function numWays(steps, arrLen) {
  const mod = 1e9 + 7;
  let prev = [1];
  const maxRight = Math.min(1 + ((steps / 2) | 0), arrLen);
  for (let step = 1; step <= steps; step++) {
    const max = Math.min(step + 1, steps - step + 1, maxRight);
    let next = Array(max);
    for (let i = 0; i < max; i++) {
      const left = prev[i - 1] || 0;
      const mid = prev[i] || 0;
      const right = prev[i + 1] || 0;
      next[i] = (left + mid + right) % mod;
    }
    prev = next;
  }
  return prev[0];
}
