'use strict';

module.exports = { numTeams };

/**
 * @param {number[]} rating
 * @return {number}
 */
function numTeams(rating) {
  let count = 0;
  for (let i = 0; i < rating.length - 2; i++) {
    const ni = rating[i];
    for (let j = i + 1; j < rating.length - 1; j++) {
      const nj = rating[j];
      for (let k = j + 1; k < rating.length; k++) {
        const nk = rating[k];
        if (ni < nj && nj < nk) {
          count++;
          continue;
        }
        if (ni > nj && nj > nk) {
          count++;
        }
      }
    }
  }
  return count;
}
