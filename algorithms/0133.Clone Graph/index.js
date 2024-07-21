'use strict';

class Node {
  constructor(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

module.exports = { cloneGraph, Node };

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val
 *    this.neighbors = neighbors === undefined ? [] : neighbors
 * }
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
function cloneGraph(node) {
  const nodeMap = new Map();
  return cloneNode(node);

  function cloneNode(node) {
    if (node == null) {
      return null;
    }
    if (nodeMap.has(node.val)) {
      return nodeMap.get(node.val);
    }
    const clone = new Node(node.val, []);
    nodeMap.set(clone.val, clone);
    for (const neighbor of node.neighbors) {
      clone.neighbors.push(cloneNode(neighbor));
    }
    return clone;
  }
}
