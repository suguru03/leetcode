'use strict';

module.exports = { calPoints };

/**
 * @param {string[]} ops
 * @return {number}
 */
function calPoints(ops) {
  const nums = [];
  for (const c of ops) {
    switch (c) {
      case '+':
        nums.push(get(nums.length - 1) + get(nums.length - 2));
        break;
      case 'D':
        nums.push(get(nums.length - 1) * 2);
        break;
      case 'C':
        nums.pop();
        break;
      default:
        nums.push(+c);
        break;
    }
  }
  return nums.reduce((sum, num) => sum + num);

  function get(index) {
    return nums[index] || 0;
  }
}
