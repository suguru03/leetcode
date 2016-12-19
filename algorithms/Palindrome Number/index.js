'use strict';

module.exports = isPalindrome;

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  if (x < 0 || x % 1 !== 0) {
    return false;
  }
  let size = getSize(x);
  while (x !== 0) {
    const n1 = x / size | 0;
    const n2 = x % 10;
    if (n1 !== n2) {
      return false;
    }
    x = Math.floor(x % size / 10);
    size /= 100;
  }
  return true;
}

function isPalindrome2(x) {
  if (x < 0 || x % 1 !== 0) {
    return false;
  }
  const num = x;
  let result = 0;
  while (x !== 0) {
    result = result * 10 + Math.floor(x % 10);
    x = Math.floor(x / 10);
  }
  return num === result;
}

function getSize(x) {
  let result = 1;
  while (x > 10) {
    result *= 10;
    x /= 10;
  }
  return result;
}
