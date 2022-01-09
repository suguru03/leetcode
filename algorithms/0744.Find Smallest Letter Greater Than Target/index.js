'use strict';

module.exports = { nextGreatestLetter };

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
function nextGreatestLetter(letters, target) {
  let l = 0;
  let r = letters.length;
  while (l < r) {
    const m = (l + (r - l) / 2) | 0;
    if (letters[m] <= target) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return letters[l === letters.length ? 0 : l];
}
