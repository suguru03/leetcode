'use strict';

module.exports = { nextClosestTime };

/**
 * @param {string} time
 * @return {string}
 */
function nextClosestTime(time) {
  const parts = time.split('').filter(s => s !== ':');
  const patterns = [];
  makePatterns(parts, []);
  patterns.sort();
  let index;
  const l = patterns.length;
  for (let i = 0; i < l; i++) {
    const t = patterns[i];
    if (t > time) {
      return t;
    }
    if (t === time) {
      index = i;
    }
  }
  return index + 1 === l ? patterns[0] : index === 0 ? patterns[l - 1] : patterns[index - 1];

  function makePatterns(parts, array) {
    if (array.length === 4) {
      const h = `${array[0]}${array[1]}`;
      const m = `${array[2]}${array[3]}`;
      if (h >= 24 || m >= 60) {
        return;
      }
      return patterns.push(`${h}:${m}`);
    }
    for (let i = 0; i < parts.length; i++) {
      makePatterns(parts, array.concat(parts[i]));
    }
  }
}
