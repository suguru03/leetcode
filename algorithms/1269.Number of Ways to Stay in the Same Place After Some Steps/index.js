/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
function numWays(steps, arrLen) {
  const mod = 1e9 + 7;
  let prev = Array(arrLen).fill(0);
  const maxRight = Math.min(((steps / 2) | 0) + 1, arrLen);
  prev[0] = 1;
  for (let step = 1; step <= steps; step++) {
    const max = Math.max(step, maxRight);
    let next = Array(max);
    for (let i = 0; i < max; i++) {
      const left = prev[i - 1] || 0;
      const mid = prev[i];
      const right = prev[i + 1] || 0;
      next[i] = (left + mid + right) % mod;
    }
    prev = next;
  }
  return prev[0];
}
