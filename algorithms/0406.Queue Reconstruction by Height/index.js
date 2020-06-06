'use strict';

module.exports = { reconstructQueue };

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
function reconstructQueue(people) {
  people.sort(([h1, k1], [h2, k2]) => h2 - h1 || k1 - k2);
  const result = [];
  const k = 1;
  for (const person of people) {
    result.splice(person[k], 0, person);
  }
  return result;
}
