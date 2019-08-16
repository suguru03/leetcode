'use strict';

module.exports = { Interval, employeeFreeTime };

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[][]} avails
 * @return {Interval[]}
 */
function employeeFreeTime(avails) {
  const list = [];
  for (let i = 0; i < avails.length; i++) {
    const items = avails[i];
    for (let j = 0; j < items.length; j++) {
      list.push(items[j]);
    }
  }
  const result = [];
  const l = list.length;
  if (l === 0) {
    return result;
  }
  list.sort((a, b) => a.start - b.start);
  let [{ end }] = list;
  for (let i = 1; i < l; i++) {
    const item = list[i];
    if (item.start > end) {
      result.push(new Interval(end, item.start));
    }
    end = Math.max(end, item.end);
  }
  return result;
}

function Interval(start, end) {
  this.start = start;
  this.end = end;
}
