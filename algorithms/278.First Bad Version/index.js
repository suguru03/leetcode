'use strict';

module.exports = { solution };

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let start = 1;
    let end = n;
    while (start < end) {
      const mid = start + (end - start) / 2 | 0;
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
}
