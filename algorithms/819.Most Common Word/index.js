'use strict';

module.exports = { mostCommonWord };

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
function mostCommonWord(paragraph, banned) {
  const bannedMap = {};
  banned.forEach(b => (bannedMap[b.toLowerCase()] = true));

  const re = /[\s!?',;.]/g;
  const words = paragraph.toLowerCase().split(re);
  const map = {};
  words.forEach(word => {
    if (bannedMap[word] || !word.length) {
      return;
    }
    map[word] = ++map[word] || 1;
  });

  let max = 0;
  let result = '';
  for (const [word, val] of Object.entries(map)) {
    if (val > max) {
      max = val;
      result = word;
    }
  }
  return result;
}
