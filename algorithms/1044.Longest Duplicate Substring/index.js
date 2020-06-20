'use strict';

module.exports = { longestDupSubstring };

/**
 * @param {string} S
 * @return {string}
 */
function longestDupSubstring(S) {
  let min = 0;
  let max = S.length;
  let index = -1;
  let mod = 1n;
  for (let i = 0; i < 63; i++) {
    mod *= 2n;
  }
  loop: while (min < max) {
    const size = (min + (max - min + 1) / 2) | 0;
    let cur = 0n;
    for (let i = 0; i < size; i++) {
      cur = (cur * 26n + getCode(i)) % mod;
    }
    let pow = 1n;
    for (let i = 0; i < size; i++) {
      pow = (pow * 26n) % mod;
    }
    const set = new Set([cur]);
    for (let i = size; i < S.length; i++) {
      cur = (cur * 26n + getCode(i) - getCode(i - size) * pow) % mod;
      if (set.has(cur)) {
        min = size;
        index = i - size + 1;
        continue loop;
      }
      set.add(cur);
    }
    max = size - 1;
  }
  return index === -1 ? '' : S.slice(index, index + min);

  function getCode(index) {
    return BigInt(S.charCodeAt(index) - 96);
  }
}
