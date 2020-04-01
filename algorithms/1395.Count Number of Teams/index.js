'use strict';

module.exports = { numTeams, numTeams2 };

/**
 * @param {number[]} rating
 * @return {number}
 */
function numTeams(rating) {
  let count = 0;
  for (let i = 0; i < rating.length - 2; i++) {
    const ri = rating[i];
    for (let j = i + 1; j < rating.length - 1; j++) {
      const rj = rating[j];
      for (let k = j + 1; k < rating.length; k++) {
        const rk = rating[k];
        if (ri < rj && rj < rk) {
          count++;
          continue;
        }
        if (ri > rj && rj > rk) {
          count++;
        }
      }
    }
  }
  return count;
}

/**
 * @see https://leetcode.com/problems/count-number-of-teams/discuss/554795/C%2B%2BJava-O(n-*-n)
 * @param {number[]} rating
 * @return {number}
 */
function numTeams2(rating) {
  let result = 0;
  for (let i = 1; i < rating.length - 1; i++) {
    const ri = rating[i];
    const less = { left: 0, right: 0 };
    const greater = { left: 0, right: 0 };
    for (let j = 0; j < rating.length; j++) {
      const rj = rating[j];
      if (ri > rj) {
        if (j > i) {
          less.right++;
        } else {
          less.left++;
        }
        continue;
      }
      if (ri < rj) {
        if (j > i) {
          greater.right++;
        } else {
          greater.left++;
        }
      }
    }
    result += less.left * greater.right + less.right * greater.left;
  }
  return result;
}
