'use strict';

module.exports = { isPalindrome, isPalindrome2 };

function isPalindrome(s) {
  const regex = /[a-zA-Z0-9]/;
  s = s
    .toLowerCase()
    .split('')
    .filter((c) => regex.test(c));
  const l = s.length;
  for (let i = 0; (i < l / 2) | 0; i++) {
    if (s[i] !== s[l - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome2(s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    const left = s[l].toLocaleLowerCase();
    if (!isValid(left)) {
      l++;
      continue;
    }
    const right = s[r].toLocaleLowerCase();
    if (!isValid(right)) {
      r--;
      continue;
    }
    if (left !== right) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

const regex = /[a-z0-9]/;

function isValid(c) {
  return regex.test(c);
}
