'use strict';

module.exports = { toGoatLatin };

/**
 * @param {string} S
 * @return {string}
 */
function toGoatLatin(S) {
  const result = [];
  const words = S.split(/\s/);
  let prev = '';
  for (const word of words) {
    const w = /^[aeiou]/i.test(word) ? `${word}ma` : `${word.slice(1)}${word[0]}ma`;
    prev += 'a';
    result.push(`${w}${prev}`);
  }
  return result.join(' ');
}
