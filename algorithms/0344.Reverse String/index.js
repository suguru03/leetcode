'use strict';

const _ = require('lodash');

module.exports = { reverseString, reverseString2, reverseString3 };

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  const l = s.length;
  for (let i = 0; i < l / 2; i++) {
    const j = l - i - 1;
    [s[i], s[j]] = [s[j], s[i]];
  }
}

function reverseString2(s) {
  const l = s.length;
  reverse(0);

  function reverse(i) {
    const j = l - i - 1;
    if (j <= i) {
      return;
    }
    [s[i], s[j]] = [s[j], s[i]];
    reverse(++i);
  }
}

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString3(s) {
  _.times(s.length / 2, i => {
    const j = s.length - i - 1;
    [s[i], s[j]] = [s[j], s[i]];
  });
}
