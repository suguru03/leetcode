'use strict';

module.exports = { countCharacters, countCharacters2 };

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words, chars) {
  const map = {};
  for (const c of chars) {
    map[c] = ++map[c] || 1;
  }
  let cur = {};
  let res = 0;
  loop: for (const word of words) {
    cur = {};
    for (const c of word) {
      if (!map[c]) {
        continue loop;
      }
      cur[c] = ++cur[c] || 1;
      if (cur[c] > map[c]) {
        continue loop;
      }
    }
    res += word.length;
  }
  return res;
}

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters2(words, chars) {
  const arr = Array(26).fill(0);
  for (let i = 0; i < chars.length; i++) {
    arr[chars.charCodeAt(i) - 97]++;
  }
  let res = 0;
  const cur = Array(26);
  loop: for (const word of words) {
    cur.fill(0);
    for (let i = 0; i < word.length; i++) {
      const code = word.charCodeAt(i) - 97;
      if (++cur[code] > arr[code]) {
        continue loop;
      }
    }
    res += word.length;
  }
  return res;
}
