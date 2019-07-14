'use strict';

module.exports = { maxDepthAfterSplit };

/**
 * @param {string} seq
 * @return {number[]}
 */
function maxDepthAfterSplit(seq) {
  let depth = 0;
  return seq.split('').map(c => (c === '(' ? depth++ % 2 : --depth % 2));
}
