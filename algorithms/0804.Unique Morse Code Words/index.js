'use strict';

module.exports = { uniqueMorseRepresentations };

const list = [
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
  const map = {};
  for (const word of words) {
    let str = '';
    for (let i = 0; i < word.length; i++) {
      const code = word[i].charCodeAt() - 97;
      str += list[code];
    }
    map[str] = true;
  }
  return Object.keys(map).length;
}
