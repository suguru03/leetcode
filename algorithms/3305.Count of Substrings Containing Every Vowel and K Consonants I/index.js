'use strict';

module.exports = { countOfSubstrings };

const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
const vowelIndexMap = new Map(Array.from(vowelSet, (v, i) => [v, i]));

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
function countOfSubstrings(word, k) {
  let result = 0;
  for (let i = 0; i < word.length; i++) {
    const vowels = Array(5).fill(0);
    let consonants = 0;
    for (let j = i; j < word.length; j++) {
      const char = word.charAt(j);
      if (vowelSet.has(char)) {
        vowels[vowelIndexMap.get(char)]++;
      } else if (++consonants > k) {
        break;
      }

      if (vowels.every((num) => num > 0) && consonants === k) {
        result++;
      }
    }
  }

  return result;
}
