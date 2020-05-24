'use strict';

module.exports = { isPrefixOfWord, isPrefixOfWord2 };

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
function isPrefixOfWord(sentence, searchWord) {
  const i = sentence.split(' ').findIndex(str => str.startsWith(searchWord));
  return i === -1 ? i : i + 1;
}

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
function isPrefixOfWord2(sentence, searchWord) {
  let i = 0;
  let count = 1;
  for (const c of sentence) {
    if (c === ' ') {
      i = 0;
      count++;
      continue;
    }
    if (c !== searchWord[i++]) {
      i = -1;
      continue;
    }
    if (i === searchWord.length) {
      return count;
    }
  }
  return -1;
}
