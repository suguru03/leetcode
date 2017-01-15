'use strict';

module.exports = { countAndSay, countAndSay2 };

/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
  let prev = [1];
  while (--n > 0) {
    let i = -1;
    let current;
    const l = prev.length;
    const nums = [];
    while (++i < l) {
      const n = prev[i];
      if (n !== current) {
        current = n;
        nums.push(1, n);
      } else {
        nums[nums.length - 2]++;
      }
    }
    prev = nums;
  }
  return prev.join('');
}

/**
 * @param {number} n
 * @return {string}
 */
function countAndSay2(n) {
  let prev = [1];
  while (--n > 0) {
    let i = -1;
    let current = prev[++i];
    let count = 1;
    const l = prev.length;
    const nums = [];
    while (++i < l) {
      const n = prev[i];
      if (n !== current) {
        nums.push(count, current);
        current = n;
        count = 1;
      } else {
        count++;
      }
    }
    nums.push(count, current);
    prev = nums;
  }
  return prev.join('');
}
