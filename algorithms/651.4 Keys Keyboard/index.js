'use strict';

module.exports = { maxA };

/**
 * @param {number} N
 * @return {number}
 */
function maxA(N) {
  const d = Array(N + 1).fill(1);
  for (let i = 1; i <= N; i++) {
    const n1 = d[i];
    // A
    for (let j = i + 1; j <= N; j++) {
      d[j] = Math.max(d[j], n1 + j - i);
    }
    // Ctrl A + C + V
    for (let j = i + 3; j <= N; j++) {
      d[j] = Math.max(d[j], n1 * (j - i - 1));
    }
  }
  return d[N];
}
