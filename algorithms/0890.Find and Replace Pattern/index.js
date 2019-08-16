'use strict';

module.exports = { findAndReplacePattern, findAndReplacePattern2 };

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
function findAndReplacePattern(words, pattern) {
  const patterns = makePetterns(pattern);
  return words.filter(word => {
    const p = makePetterns(word);
    return p.every((n, i) => n === patterns[i]);
  });
}

function makePetterns(str) {
  const l = str.length;
  const patterns = Array(l);
  const map = new Map();
  for (let i = 0; i < l; i++) {
    const c = str[i];
    if (map.has(c)) {
      patterns[i] = map.get(c);
      continue;
    }
    patterns[i] = map.size;
    map.set(c, map.size);
  }
  return patterns;
}

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
function findAndReplacePattern2(words, pattern) {
  const patterns = makePetterns(pattern);
  return words.filter(word => check(word, patterns));
}

function check(str, ref) {
  const l = str.length;
  const map = new Map();
  for (let i = 0; i < l; i++) {
    const c = str[i];
    if (!map.has(c)) {
      map.set(c, map.size);
    }
    if (map.get(c) !== ref[i]) {
      return false;
    }
  }
  return true;
}
