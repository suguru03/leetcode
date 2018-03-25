'use strict';

module.exports = { floodFill };

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
  const t = image[sr][sc];
  if (t !== newColor) {
    fill(sr, sc);
  }
  return image;

  function fill(sr, sc) {
    const row = image[sr];
    if (!row) {
      return;
    }
    const n = row[sc];
    if (n !== t) {
      return;
    }
    image[sr][sc] = newColor;
    fill(sr - 1, sc);
    fill(sr + 1, sc);
    fill(sr, sc - 1);
    fill(sr, sc + 1);
  }
}
