'use strict';

module.exports = { numOfBurgers };

/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
function numOfBurgers(tomatoSlices, cheeseSlices) {
  const jumbo = tomatoSlices / 2 - cheeseSlices;
  const small = cheeseSlices - jumbo;
  return jumbo % 1 !== 0 || jumbo < 0 || small < 0 ? [] : [jumbo, small];
}
