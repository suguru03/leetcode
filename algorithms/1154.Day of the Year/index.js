'use strict';

module.exports = { dayOfYear };

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/**
 * @param {string} str
 * @return {number}
 */
function dayOfYear(str) {
  let [year, month, date] = str.split('-').map(n => Number(n));
  if (month > 2 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    date++;
  }
  while (--month) {
    date += days[month - 1];
  }
  return date;
}
