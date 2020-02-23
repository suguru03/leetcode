'use strict';

module.exports = { daysBetweenDates, daysBetweenDates2 };

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
function daysBetweenDates(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diff = Math.abs(d1.getTime() - d2.getTime());
  const day = 24 * 60 * 60 * 1000;
  return diff / day;
}

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
function daysBetweenDates2(date1, date2) {
  return Math.abs(daysFrom1970(date1) - daysFrom1970(date2));
}

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function daysFrom1970(str) {
  let [year, month, days] = str.split('-').map(str => Number(str));
  for (let y = 1970; y < year; y++) {
    days += isLeapYear(y) ? 366 : 365;
  }
  if (month > 2 && isLeapYear(year)) {
    days++;
  }
  while (--month > 0) {
    days += days[month - 1];
  }
  return days;
}

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
