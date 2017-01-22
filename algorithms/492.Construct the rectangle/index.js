'use strict';

module.exports = { constructRectangle };

/**
 * @param {number} area
 * @return {number[]}
 */
function constructRectangle(area) {
  let l = Math.sqrt(area);
  if (l % 1 === 0) {
    return [l, l];
  }
  let w = Math.floor(l);
  l = Math.ceil(l);
  if (w * l === area) {
    return [l, w];
  }
  while (l++) {
    w = area / l;
    if (w % 1 === 0) {
      return [l, w];
    }
  }
}
