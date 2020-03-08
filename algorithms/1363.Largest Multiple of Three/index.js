'use strict';

module.exports = { largestMultipleOfThree };

const odd = [1, 4, 7];
const even = [2, 5, 8];

/**
 * @param {number[]} digits
 * @return {string}
 */
function largestMultipleOfThree(digits) {
  const counts = Array(10).fill(0);
  for (const num of digits) {
    counts[num]++;
  }
  const total = counts.reduce((sum, count, num) => sum + count * num, 0);
  if ((total % 3 === 1 && !check(odd, even)) || (total % 3 === 2 && !check(even, odd))) {
    return '';
  }
  let str = '';
  for (const [num, count] of Array.from(counts.entries()).reverse()) {
    if (!count) {
      continue;
    }
    if (num === 0 && str.length === 0) {
      return '0';
    }
    str += num.toString().repeat(count);
  }
  return str;

  function check(set1, set2) {
    for (const num of set1) {
      if (counts[num]) {
        counts[num]--;
        return true;
      }
    }
    const set3 = [];
    for (const [i, n1] of set2.entries()) {
      for (const n2 of set2.slice(i)) {
        set3.push([n1, n2]);
      }
    }
    set3.sort(([n1, n2, n3], [n4, n5, n6]) => n3 - n6 || n2 - n5 || n1 - n4);
    for (const [n1, n2] of set3) {
      if (n1 === n2 ? counts[n1] < 2 : counts[n1] < 1 || counts[n2] < 1) {
        continue;
      }
      counts[n1]--;
      counts[n2]--;
      return true;
    }
    return false;
  }
}
