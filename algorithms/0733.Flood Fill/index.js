'use strict';

module.exports = { floodFill, floodFill2 };

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
  const color = image[sr][sc];
  if (color !== newColor) {
    dfs(sc, sr);
  }
  return image;

  function dfs(x, y) {
    const row = image[y];
    if (!row || row[x] !== color) {
      return;
    }
    row[x] = newColor;
    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
  }
}

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
function floodFill2(image, sr, sc, newColor) {
  const color = image[sr][sc];
  if (color === newColor) {
    return image;
  }
  const queue = [{ x: sc, y: sr }];
  while (queue.length) {
    const { x, y } = queue.shift();
    const row = image[y];
    if (!row || row[x] !== color) {
      continue;
    }
    row[x] = newColor;
    queue.push({ x: x - 1, y }, { x: x + 1, y }, { x, y: y - 1 }, { x, y: y + 1 });
  }
  return image;
}
