'use strict';

module.exports = { wordPattern };

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
  const wordMap = {};
  const patternMap = {};
  const list = s.split(' ');
  return (
    list.length === pattern.length &&
    list.every((w, i) => {
      const p = pattern[i];
      wordMap[p] ??= w;
      patternMap[w] ??= p;
      return patternMap[w] === p && wordMap[p] === w;
    })
  );
}
