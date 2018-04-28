'use strict';

module.exports = { minimumLengthEncoding };

/**
 * @param {string[]} words
 * @return {number}
 */
function minimumLengthEncoding(words) {
  const map = {};
  for (const word of words) {
    map[word] = word;
  }
  for (const word of words) {
    for (let i = 1; i < word.length; i++) {
      delete map[word.slice(i)];
    }
  }
  return Object.values(map).reduce((sum, word) => sum + word.length + 1, 0);
}
