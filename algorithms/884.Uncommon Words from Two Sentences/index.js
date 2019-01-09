'use strict';

module.exports = { uncommonFromSentences, uncommonFromSentences2 };

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
function uncommonFromSentences(A, B) {
  const map = new Map();
  count(A);
  count(B);
  return Array.from(map)
    .filter(([, count]) => count === 1)
    .map(([key]) => key);

  function count(str) {
    str.split(' ').forEach(word => map.set(word, map.get(word) + 1 || 1));
  }
}

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
function uncommonFromSentences2(A, B) {
  const set = new Set();
  const result = new Set();
  resolve(A);
  resolve(B);
  return Array.from(result);

  function resolve(str) {
    for (const word of str.split(' ')) {
      if (set.has(word)) {
        result.delete(word);
      } else {
        set.add(word);
        result.add(word);
      }
    }
  }
}
