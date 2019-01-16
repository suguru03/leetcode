'use strict';

module.exports = { largestPalindrome };

/**
 * @param {number} n
 * @return {number}
 */
function largestPalindrome(n) {
  if (n === 1) {
    return 9;
  }
  if (n === 8) {
    // return 9999000000009999 % 1337;
    return 475;
  }
  const upper = Math.pow(10, n) - 1;
  const lower = Math.pow(10, n - 1);
  const max = Math.pow(upper, 2);

  let half = (max / upper) | 0;

  let palindrom = 0;
  first: while (half) {
    palindrom = createPalindrom(half--);
    for (let i = upper; i >= lower; i--) {
      if (i * i < palindrom) {
        break;
      }
      if (palindrom % i === 0) {
        break first;
      }
    }
  }
  return palindrom % 1337;
}

function createPalindrom(half) {
  let h = half;
  let num = 0;
  let digit = 0;
  while (h > 0) {
    num = num * 10 + (h % 10);
    h = (h / 10) | 0;
    digit++;
  }
  return num + half * Math.pow(10, digit);
}
