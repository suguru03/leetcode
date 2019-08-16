'use strict';

module.exports = { nextGreatestLetter };

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
function nextGreatestLetter(letters, target) {
  return letters.find(letter => letter > target) || letters[0];
}
