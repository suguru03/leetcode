'use strict';

module.exports = { longestPalindrome };

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  const ds = `#${s.split('').join('#')}#`;
  const n = ds.length;
  const rad = Array(n);
  for (let i = 0, j = 0; i < n; ) {
    let li, ri;
    while (0 <= (li = i - j) && (ri = i + j) < n && ds[li] === ds[ri]) {
      j++;
    }
    rad[i] = j;
    let k = 1;
    for (; 0 <= i - k && i + k < n && rad[i - k] < j - k; k++) {
      rad[i + k] = rad[i - k];
    }
    i += k;
    j = Math.max(j - k, 0);
  }
  const max = Math.max.apply(null, rad);
  for (let i = 0; i < n; i++) {
    if (rad[i] !== max) {
      continue;
    }
    const str = ds.slice(i - max + 1, i + max);
    return str.replace(/#/g, '');
  }
}
