'use strict';

module.exports = { findWords };

class Node {
  constructor(char) {
    this.char = char;
    this.word = false;
    this.children = new Map();
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(board, words) {
  const root = new Node('');
  for (const word of words) {
    generate(0, word, root);
  }

  const charMap = new Map();
  for (const [y, row] of board.entries()) {
    for (const [x, char] of row.entries()) {
      charMap.set(char, charMap.get(char) || []);
      charMap.get(char).push({ x, y });
    }
  }

  const result = new Set();
  for (const [char, child] of root.children) {
    for (const { x, y } of charMap.get(char) || []) {
      dfs(child, x, y);
    }
  }
  return Array.from(result);

  function generate(index, word, parent) {
    const char = word.charAt(index);
    const node = parent.children.get(char) || new Node(char);
    parent.children.set(char, node);
    if (++index === word.length) {
      node.word = word;
      return;
    }
    generate(index, word, node);
  }

  function dfs(node, x, y) {
    if (y < 0 || y >= board.length || x < 0 || x >= board[y].length) {
      return;
    }
    if (node.char !== board[y][x]) {
      return;
    }
    if (node.word) {
      result.add(node.word);
    }
    const char = board[y][x];
    board[y][x] = null;
    for (const child of node.children.values()) {
      dfs(child, x - 1, y);
      dfs(child, x + 1, y);
      dfs(child, x, y - 1);
      dfs(child, x, y + 1);
    }
    board[y][x] = char;
  }
}
