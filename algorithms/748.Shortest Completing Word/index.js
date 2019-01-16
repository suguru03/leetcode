'use strict';

module.exports = { shortestCompletingWord };

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 *
 */
function shortestCompletingWord(licensePlate, words) {
  const map = createMap(licensePlate);
  const keys = Object.keys(map);
  const kl = keys.length;
  let answer;
  loop: for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const m = createMap(word);
    for (let j = 0; j < kl; j++) {
      const k = keys[j];
      if (m[k] >= map[k]) {
        continue;
      }
      continue loop;
    }
    if (!answer || word.length < answer.length) {
      answer = word;
    }
  }
  return answer;
}

function createMap(word) {
  const map = {};
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    if (/[a-z]/.test(c)) {
      map[c] = map[c] || 0;
      map[c]++;
    }
  }
  return map;
}
