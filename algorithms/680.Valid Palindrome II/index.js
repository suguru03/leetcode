'use strict';

module.exports = { validPalindrome };

/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome(s, changed) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const sl = s[left];
    const sr = s[right];
    if (sl === sr) {
      left++;
      right--;
      continue;
    }
    if (changed) {
      return false;
    }
    return (
      validPalindrome(s.substring(left++, right++), true) ||
      validPalindrome(s.substring(left, right), true)
    );
  }
  return true;
}
