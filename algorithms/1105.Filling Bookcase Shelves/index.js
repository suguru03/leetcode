'use strict';

module.exports = { minHeightShelves };

/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
function minHeightShelves(books, shelfWidth) {
  const [[width, height]] = books;
  let stack = [{ totalHeight: 0, curHeight: height, curWidth: width }];
  const nextMap = new Map();
  for (const [width, height] of books.slice(1)) {
    for (const prev of stack) {
      set({
        totalHeight: prev.totalHeight + prev.curHeight,
        curHeight: height,
        curWidth: width,
      });
      if (prev.curWidth + width <= shelfWidth) {
        prev.curWidth += width;
        prev.curHeight = Math.max(prev.curHeight, height);
        set(prev);
      }
    }
    stack = Array.from(nextMap.values());
    nextMap.clear();
  }
  let min = Infinity;
  for (const info of stack) {
    min = Math.min(min, info.totalHeight + info.curHeight);
  }
  return min;

  function set(next) {
    const width = next.curWidth;
    const prev = nextMap.get(width);
    if (!prev) {
      nextMap.set(width, next);
      return;
    }
    if (prev.totalHeight + prev.curHeight > next.totalHeight + next.curHeight) {
      nextMap.set(width, next);
    }
  }
}
