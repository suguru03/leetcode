'use strict';

module.exports = { isPalindrome };

function isPalindrome(s) {
  const regex = /[a-zA-Z0-9]/;
  s = s
    .toLowerCase()
    .split('')
    .filter(c => regex.test(c));
  const l = s.length;
  for (let i = 0; (i < l / 2) | 0; i++) {
    if (s[i] !== s[l - i - 1]) {
      return false;
    }
  }
  return true;
}
