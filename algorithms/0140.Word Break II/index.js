'use strict';

module.exports = { wordBreak };

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
function wordBreak(s, wordDict) {
  const wordMap = new Map();
  for (const word of wordDict) {
    const key = word[0];
    wordMap.set(key, wordMap.get(key) || []);
    wordMap.get(key).push(word);
  }
  const memo = new Map();
  dfs(s);
  return memo.has(s) ? Array.from(memo.get(s)) : [];

  function dfs(str) {
    if (str.length === 0) {
      return null;
    }
    const words = wordMap.get(str[0]);
    if (!words) {
      return null;
    }
    if (memo.has(str)) {
      return memo.get(str);
    }
    const cache = new Set();
    for (const word of words) {
      if (!str.startsWith(word)) {
        continue;
      }
      if (str === word) {
        cache.add(word);
        continue;
      }
      const result = dfs(str.slice(word.length));
      if (!result) {
        continue;
      }
      for (const res of result) {
        cache.add([word, res].join(' '));
      }
    }
    memo.set(str, cache);
    return cache;
  }
}
