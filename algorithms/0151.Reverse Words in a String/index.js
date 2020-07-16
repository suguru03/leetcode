'use strict';

module.exports = { reverseWords };

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  return s
    .split(' ')
    .filter(str => str)
    .reverse()
    .join(' ');
}
