'use strict';

module.exports = { isPalindrome, isPalindrome2 };

function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  let n1 = x;
  let n2 = 0;
  while (n1) {
    n2 = n2 * 10 + (n1 % 10);
    n1 = Math.floor(n1 / 10);
  }
  return n2 === x;
}

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome2(x) {
  if (x < 0 || x % 1 !== 0) {
    return false;
  }
  let size = getSize(x);
  while (x !== 0) {
    const n1 = (x / size) | 0;
    const n2 = x % 10;
    if (n1 !== n2) {
      return false;
    }
    x = Math.floor((x % size) / 10);
    size /= 100;
  }
  return true;
}

function getSize(x) {
  let result = 1;
  while (x > 10) {
    result *= 10;
    x /= 10;
  }
  return result;
}
