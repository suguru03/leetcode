'use strict';

module.exports = { ladderLength };

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  let count = 1;
  let prev = [beginWord];
  while (prev.length !== 0) {
    count++;
    const next = [];
    for (const word of prev) {
      for (let i = 0; i < word.length; i++) {
        const prefix = word.slice(0, i);
        const suffix = word.slice(i + 1);
        for (let c = 97; c < 97 + 26; c++) {
          const nextWord = prefix + String.fromCharCode(c) + suffix;
          if (!wordSet.has(nextWord)) {
            continue;
          }
          if (nextWord === endWord) {
            return count;
          }
          wordSet.delete(nextWord);
          next.push(nextWord);
        }
      }
    }
    prev = next;
  }
  return 0;
}
