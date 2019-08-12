'use strict';

module.exports = { dayOfYear };

/**
 * @param {string} date
 * @return {number}
 */
function dayOfYear(date) {
  let [year, month, days] = date.split('-').map(n => +n);
  while (--month) {
    switch (month) {
      case 2:
        days += year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days += 30;
        break;
      default:
        days += 31;
        break;
    }
  }
  return days;
}
