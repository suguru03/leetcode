'use strict';

module.exports = { compress };

/**
 * @param {character[]} chars
 * @return {number}
 */
function compress(chars) {
  let left = -1;
  let count = 1;
  for (const char of chars) {
    if (chars[left] === char) {
      count++;
      continue;
    }
    shift();
    chars[left] = char;
  }
  shift();
  return left;

  function shift() {
    let c = count;
    while (c > 0) {
      const k = Math.ceil(Math.log10(c + 1));
      chars[left + k] = `${c % 10}`;
      c = (c / 10) | 0;
    }
    left += count === 1 ? 1 : Math.ceil(Math.log10(count + 1)) + 1;
    count = 1;
  }
}
