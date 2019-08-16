'use strict';

module.exports = { longestWord };

/**
 * @param {string[]} words
 * @return {string}
 */
function longestWord(words) {
  words.sort((w1, w2) => w1.localeCompare(w2));
  const set = new Set(['']);
  let result = '';
  for (const word of words) {
    if (!set.has(word.slice(0, word.length - 1))) {
      continue;
    }
    set.add(word);
    if (word.length > result.length) {
      result = word;
    }
  }
  return result;
}
