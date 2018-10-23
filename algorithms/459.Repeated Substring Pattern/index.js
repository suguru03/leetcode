'use strict';

module.exports = { repeatedSubstringPattern };

/**
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern(s) {
  const l = s.length;
  let div = 2;
  loop: while (div <= l) {
    const size = l / div++;
    if (size % 1 !== 0) {
      continue;
    }
    const str = s.substr(0, size);
    for (let i = size; i < l; i += size) {
      const ts = s.substr(i, size);
      if (str !== ts) {
        continue loop;
      }
    }
    return true;
  }
  return false;
}
