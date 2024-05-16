'use strict';

module.exports = { smallestNumber };

/**
 * @param {string} pattern
 * @return {string}
 */
function smallestNumber(pattern) {
  const maxNum = pattern.length + 1;
  return dfs(Array(maxNum + 1).fill(false), []);

  function dfs(taken, current) {
    if (current.length === maxNum) {
      return current.join('');
    }

    let min = 1;
    let max = maxNum;
    if (current.length >= 1) {
      let index = current.length - 1;
      if (pattern[index] === 'D') {
        max = current[index] - 1;
      } else {
        min = current[index] + 1;
      }
    }

    for (let n = min; n <= max; n++) {
      if (taken[n]) {
        continue;
      }

      current.push(n);
      taken[n] = true;
      const result = dfs(taken, current);
      if (result) {
        return result;
      }
      taken[n] = false;
      current.pop(n);
    }

    return null;
  }
}
