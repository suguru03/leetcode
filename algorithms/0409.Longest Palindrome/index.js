'use strict';

module.exports = { longestPalindrome, longestPalindrome2 };

/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
  const map = new Map();
  for (const c of s) {
    map.set(c, ~~map.get(c) + 1);
  }
  let count = 0;
  for (const num of map.values()) {
    count |= num & 1;
    count += num - (num % 2);
  }
  return count;
}

/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome2(s) {
  let count = 0;
  const set = new Set();
  for (const c of s) {
    count += set.has(c) << 1;
    set.has(c) ? set.delete(c) : set.add(c);
  }
  return count + (!set.size ^ 1);
}
