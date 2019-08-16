'use strict';

module.exports = { maxRepOpt1 };

/**
 * @param {string} text
 * @return {number}
 */
function maxRepOpt1(text) {
  if (!text) {
    return 0;
  }
  const list = [];
  let countMap = {};
  let max = 1;
  for (const c of text) {
    countMap[c] = ++countMap[c] || 1;
    const obj = list[list.length - 1] || {};
    if (c === obj.c) {
      obj.count++;
      continue;
    }
    list.push({ c, count: 1 });
  }
  const l = list.length;
  const dummy = {};
  for (let i = 0; i < l; i++) {
    const curr = list[i];
    const prev = list[i - 1] || dummy;
    const next = list[i + 1] || dummy;
    if (curr.count === 1 && prev.c === next.c) {
      max = Math.max(max, prev.count + next.count + (l > 3 ? 1 : 0));
    }
    const total = countMap[curr.c];
    max = Math.max(max, total === curr.count ? total : curr.count + 1);
  }
  return max;
}
