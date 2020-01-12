'use strict';

module.exports = { minFlips };

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function minFlips(a, b, c) {
  const as = a.toString(2);
  const bs = b.toString(2);
  const cs = c.toString(2);
  let count = 0;
  const max = Math.max(as.length, bs.length, cs.length);
  for (let i = 0; i < max; i++) {
    const bit = ~~cs[cs.length - i - 1];
    const a = ~~as[as.length - i - 1];
    const b = ~~bs[bs.length - i - 1];
    if (bit) {
      count += a || b ? 0 : 1; // nor
    } else {
      count += a ? 1 : 0;
      count += b ? 1 : 0;
    }
  }
  return count;
}
