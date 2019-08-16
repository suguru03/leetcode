'use strict';

module.exports = { customSortString };

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
function customSortString(S, T) {
  const ls = S.length;
  const map = {};
  for (let i = 0; i < ls; i++) {
    map[S[i]] = i;
  }
  const lt = T.length;
  const arr = Array(ls);
  const rest = [];
  for (let i = 0; i < lt; i++) {
    const c = T[i];
    const index = map[c];
    if (index === undefined) {
      rest.push(c);
    } else {
      arr[index] = `${arr[index] || ''}${c}`;
    }
  }
  return `${arr.reduce((str, s) => `${str}${s}`)}${rest.join('')}`;
}
