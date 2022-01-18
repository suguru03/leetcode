'use strict';

module.exports = { canPlaceFlowers };

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed, n) {
  let i = -1;
  loop: while (n > 0 && ++i < flowerbed.length) {
    for (let j = -1; j <= 1; j++) {
      if (flowerbed[j + i]) {
        continue loop;
      }
    }
    i++;
    n--;
  }
  return n === 0;
}
