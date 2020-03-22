'use strict';

module.exports = { longestPrefix, longestPrefix2, longestPrefix3 };

/**
 * @param {string} s
 * @return {string}
 */
function longestPrefix(s) {
  let result = '';
  for (let i = 1; i < s.length; i++) {
    let prefix = s.slice(0, i);
    let suffix = s.slice(s.length - i, s.length);
    if (prefix === suffix) {
      result = prefix;
    }
  }
  return result;
}

/**
 * Rolling hash
 * @see https://leetcode.com/problems/longest-happy-prefix/discuss/547446/C%2B%2BJava-Incremental-Hash-and-DP
 * @param {string} s
 * @return {string}
 */
function longestPrefix2(s) {
  let prefix = 0;
  let suffix = 0;
  let mul = 1;
  let end = 0;
  const mod = 1e9 + 7;
  const l = s.length;
  for (let i = 0; i < l - 1; i++) {
    prefix = (prefix * 26 + getCode(i)) % mod;
    suffix = (getCode(l - i - 1) * mul + suffix) % mod;
    if (prefix === suffix) {
      end = i + 1;
    }
    mul = (mul * 26) % mod;
  }
  return s.slice(0, end);

  function getCode(i) {
    return s.charCodeAt(i) - 96;
  }
}

/**
 * DP
 * @param {string} s
 * @return {string}
 */
function longestPrefix3(s) {
  const dp = Array(s.length).fill(0);
  let i = 0;
  let j = 0;
  while (++i < s.length) {
    if (s[i] === s[j]) {
      dp[i] = ++j;
    } else if (j > 0) {
      j = dp[j - 1];
      i--;
    }
  }
  return s.slice(0, dp[s.length - 1]);
}
