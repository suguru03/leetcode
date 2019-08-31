'use strict';

module.exports = { validPalindrome, validPalindrome2 };

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
    return validPalindrome(s.substring(left++, right++), true) || validPalindrome(s.substring(left, right), true);
  }
  return true;
}

function validPalindrome2(s, l = 0, r = s.length - 1, del = false) {
  while (l < r) {
    if (s[l] === s[r]) {
      l++;
      r--;
      continue;
    }
    if (del) {
      return false;
    }
    return validPalindrome2(s, l + 1, r, true) || validPalindrome2(s, l, r - 1, true);
  }
  return true;
}
