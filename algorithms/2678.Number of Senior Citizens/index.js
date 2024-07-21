'use strict';

module.exports = { countSeniors };

const start = 10 + 1;
const end = start + 2;

/**
 * @param {string[]} details
 * @return {number}
 */
function countSeniors(details) {
  return details.reduce((acc, cur) => acc + Number(Number(cur.slice(start, end)) > 60), 0);
}
