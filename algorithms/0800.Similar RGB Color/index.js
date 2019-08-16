'use strict';

module.exports = similarRGB;

/**
 * @param {string} color
 * @return {string}
 */
function similarRGB(color) {
  const [, r1, r2, g1, g2, b1, b2] = color.split('').map(n => parseInt(n, 16));
  return ['#'].concat(find(r1, r2), find(g1, g2), find(b1, b2)).join('');
}

function find(c1, c2) {
  const n = c1 * 16 + c2;
  let c = 0;
  let min = Infinity;
  for (let i = 0; i < 16; i++) {
    const r = i * 16 + i;
    const d = Math.abs(n - r);
    if (d < min) {
      c = i;
      min = d;
    }
  }
  c = c.toString(16);
  return [c, c];
}
