'use strict';

module.exports = { kthCharacter };

const codeMap = {
  a: 'a'.charCodeAt(0),
  z: 'z'.charCodeAt(0),
};

/**
 * @param {number} k
 * @return {character}
 */
function kthCharacter(k) {
  let word = 'a';
  while (word.length < k) {
    for (const c of word) {
      const code = c.charCodeAt(0);
      word += String.fromCharCode(code === codeMap.z ? codeMap.a : code + 1);
    }
  }

  return word[k - 1];
}
