'use strict';

module.exports = { dayOfTheWeek };

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
function dayOfTheWeek(day, month, year) {
  const m = month.toString().padStart(2, '0');
  const d = day.toString().padStart(2, '0');
  const date = new Date(`${year}-${m}-${d}`);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return days[date.getDay()];
}
