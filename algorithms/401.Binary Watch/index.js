'use strict';

module.exports = { readBinaryWatch };

/**
 * @param {number} num
 * @return {string[]}
 */
function readBinaryWatch(num) {
  const result = [];
  for (let h = 0; h < 12; h++) {
    const n = bitCount(h);
    if (n > num) {
      continue;
    }
    for (let m = 0; m < 60; m++) {
      if (n + bitCount(m) !== num) {
        continue;
      }
      const sm = m >= 10 ? m : `0${m}`;
      result.push(`${h}:${sm}`);
    }
  }
  return result;
}

function bitCount(n) {
  n = n.toString(2);
  let c = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] === '1') {
      c++;
    }
  }
  return c;
}
