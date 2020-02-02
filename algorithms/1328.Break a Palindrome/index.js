'use strict';

module.exports = { breakPalindrome };

/**
 * @param {string} palindrome
 * @return {string}
 */
function breakPalindrome(palindrome) {
  if (palindrome.length <= 1) {
    return '';
  }
  for (let i = 0; i < ((palindrome.length / 2) | 0); i++) {
    if (palindrome[i] !== 'a') {
      return palindrome.slice(0, i) + 'a' + palindrome.slice(i + 1);
    }
  }
  return palindrome.slice(0, -1) + 'b';
}
