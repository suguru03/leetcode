'use strict';

module.exports = { uniqueMorseRepresentations };

const codes = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
];

/**
 * @param {string[]} words
 * @return {number}
 */
function uniqueMorseRepresentations(words) {
  return new Set(
    words.map(word =>
      word
        .split('')
        .map(char => codes[char.charCodeAt(char) - 97])
        .join(''),
    ),
  ).size;
}
