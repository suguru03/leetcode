'use strict';

module.exports = { rearrangeBarcodes };

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
function rearrangeBarcodes(barcodes) {
  const map = new Map();
  for (const n of barcodes) {
    map.set(n, map.get(n) + 1 || 1);
  }
  const nums = Array.from(map.keys()).sort((n1, n2) => map.get(n2) - map.get(n1));
  let l = barcodes.length;
  const res = Array(l);
  let i = 0;
  for (const n of nums) {
    let count = map.get(n);
    while (count--) {
      res[i] = n;
      i += 2;
      i = i >= l ? 1 : i;
    }
  }
  return res;
}
