'use strict';

module.exports = { largestNumber };

/**
 * @param {number[]} nums
 * @return {string}
 */
function largestNumber(nums) {
  const str = nums
    .map(num => num.toString())
    .sort((n1, n2) => {
      const s1 = n1 + n2;
      const s2 = n2 + n1;
      for (let i = 0; i < s1.length; i++) {
        const c1 = s1[i];
        const c2 = s2[i];
        if (c1 !== c2) {
          return c2 - c1;
        }
      }
      return n1.length - n2.length;
    })
    .join('');
  return str.length === 0 || str[0] === '0' ? '0' : str;
}
