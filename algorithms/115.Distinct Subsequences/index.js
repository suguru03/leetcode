'use strict';

module.exports = { numDistinct, numDistinct2, numDistinct3 };

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function numDistinct(s, t) {
  const sl = s.length;
  const tl = t.length;
  const dp = [[]];
  for (let i = 0; i < sl; i++) {
    const c = s[i];
    if (c === t[0]) {
      dp[0][i] = 1;
    }
  }
  for (let i = 1; i < tl; i++) {
    const ct = t[i];
    const prev = dp[i - 1];
    const cur = (dp[i] = []);
    for (let j = 0; j < sl; j++) {
      const cs = s[j];
      if (ct !== cs) {
        continue;
      }
      cur[j] = prev.reduce((s, n, k) => (k < j ? s + n : s), 0);
    }
  }
  const row = dp[tl - 1] || [];
  return row.reduce((s, n) => s + n, 0);
}

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function numDistinct2(s, t) {
  const sl = s.length;
  const tl = t.length;
  const t0 = t[0];
  const dp = Array(sl);
  for (let i = 0; i < sl; i++) {
    dp[i] = s[i] === t0 ? 1 : 0;
  }
  for (let i = 1; i < tl; i++) {
    const ct = t[i];
    let cur = 0;
    for (let j = 0; j < sl; j++) {
      const prev = dp[j];
      dp[j] = s[j] === ct ? cur : 0;
      cur += prev;
    }
  }
  return dp.reduce((s, n) => s + n, 0);
}

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function numDistinct3(s, t) {
  const sl = s.length;
  const tl = t.length;
  const dp = Array(tl).fill(0);
  for (let i = 0; i < sl; i++) {
    const cs = s[i];
    for (let j = tl - 1; j >= 0; j--) {
      if (t[j] === cs) {
        dp[j] += j > 0 ? dp[j - 1] : 1;
      }
    }
  }
  return dp[tl - 1];
}
