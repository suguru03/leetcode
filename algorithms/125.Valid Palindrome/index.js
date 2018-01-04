'use strict';

module.exports = { isPalindrome };

function isPalindrome(s) {
  s = s.toLowerCase().replace(/\W/g, '');
  const l = s.length;
  for (let i = 0; i < l / 2 | 0; i++) {
    if (s[i] !== s[l - i - 1]) {
      return false;
    }
  }
  return true;
}
