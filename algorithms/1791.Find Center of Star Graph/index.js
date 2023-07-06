'use strict';

module.exports = { findCenter };

/**
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter(edges) {
  const [[n1, n2], [n3, n4]] = edges;
  return n1 === n3 || n1 === n4 ? n1 : n2;
}
