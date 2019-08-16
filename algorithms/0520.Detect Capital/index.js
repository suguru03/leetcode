'use strict';

module.exports = { detectCapitalUse };

const re1 = /^([a-z]|\s)*$/;
const re2 = /^(([a-z]|\s)*|([A-Z]|\s)*)$/;

/**
 * @param {string} word
 * @return {boolean}
 */
function detectCapitalUse(word) {
  const first = word[0];
  const rest = word.substr(1);
  return /[a-z]/.test(first) ? re1.test(rest) : re2.test(rest);
}
