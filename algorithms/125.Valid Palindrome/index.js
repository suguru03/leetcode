'use strict';

module.exports = { isPalindrome };

const map = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('').reduce((memo, str) => {
  memo[str] = str;
  return memo;
}, {});

function isPalindrome(s) {
  let li = 0;
  let ri = s.length - 1;
  let lc;
  let rc;
  while (li <= ri) {
    lc = s[li++].toLowerCase();
    if (!map[lc]) {
      continue;
    }
    do {
      rc = s[ri--].toLocaleLowerCase();
    } while (!map[rc]);
    if (lc !== rc) {
      return false;
    }
  }
  return true;
}
