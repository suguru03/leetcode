'use strict';

module.exports = { detectCapitalUse };

/**
 * @param {string} word
 * @return {boolean}
 */
function detectCapitalUse(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) <= 'Z') {
      count++;
    }
  }
  return count === 0 || count === word.length || (count === 1 && word.charAt(0) <= 'Z');
}
