'use strict';

module.exports = { constructRectangle, constructRectangle2, constructRectangle3 };

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

/**
 * @param {number} area
 * @return {number[]}
 */
function constructRectangle2(area) {
  let l = Math.ceil(Math.sqrt(area));
  let w;
  while (l) {
    w = area / l;
    if (w % 1 === 0) {
      return [l, w];
    }
    l++;
  }
}

/**
 * @param {number} area
 * @return {number[]}
 */
function constructRectangle3(area) {
  let w = 0;
  let l = 0;
  for (let i = 1; i * i <= area; ++i) {
    if (area % i === 0) {
      w = area / i;
      l = i;
    }
  }
  return [w, l];
}
