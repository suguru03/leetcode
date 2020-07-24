'use strict';

module.exports = { wordBreak };

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  const set = new Set([0]);
  for (let i = 1; i <= s.length; i++) {
    if (set.has(i)) {
      continue;
    }
    for (let j = 0; j < i; j++) {
      if (!set.has(j)) {
        continue;
      }
      if (wordDict.includes(s.slice(j, i))) {
        set.add(i);
      }
    }
  }
  return set.has(s.length);
}
