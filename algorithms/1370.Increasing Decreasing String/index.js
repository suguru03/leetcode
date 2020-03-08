'use strict';

module.exports = { sortString, sortString2 };

const base = 97;
const total = 26;
const keys = ['next', 'prev'];

class Node {
  constructor(val) {
    this.val = val;
    this.char = String.fromCharCode(base + val);
    this.count = 0;
    this.prev = null;
    this.next = null;
  }
}

/**
 * @param {string} s
 * @return {string}
 */
function sortString(s) {
  const nodes = Array.from({ length: total }, (_, i) => new Node(i));
  for (const c of s) {
    nodes[c.charCodeAt(0) - base].count++;
  }
  for (const [index, node] of nodes.entries()) {
    node.prev = nodes[index - 1];
    node.next = nodes[index + 1];
  }
  let current = 0;
  let result = '';
  let [node] = nodes;
  while (node.count || node.next !== node.prev) {
    const key1 = keys[current];
    if (node.count !== 0) {
      result += node.char;
      node.count--;
    } else if (node[key1]) {
      const key2 = keys[current ^ 1];
      node[key1][key2] = node[key2];
    }
    if (node[key1]) {
      node = node[key1];
    } else {
      current ^= 1;
    }
  }
  return result;
}

/**
 * @param {string} s
 * @return {string}
 */
function sortString2(s) {
  const base = 97;
  const total = 26;
  const counts = Array(total).fill(0);
  for (const c of s) {
    counts[c.charCodeAt(0) - base]++;
  }
  let index = -1;
  let remaining = s.length;
  let result = '';
  while (remaining) {
    const i = ((++index / total) | 0) % 2 ? total - (index % total) - 1 : index % total;
    if (counts[i] === 0) {
      continue;
    }
    remaining--;
    counts[i]--;
    result += String.fromCharCode(base + i);
  }
  return result;
}
