'use strict';

module.exports = { angleClock };

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
function angleClock(hour, minutes) {
  const angleM = minutes * (360 / 60);
  const angleH = ((hour % 12) + minutes / 60) * (360 / 12);
  const diff = Math.abs(angleH - angleM);
  return Math.min(diff, 360 - diff);
}
