'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.word = false;
    this.children = new Map();
  }
}

/**
 * @param {string[]} words
 */
class StreamChecker {
  root = new Node();
  letters = '';
  constructor(words) {
    for (const word of words) {
      let node = this.root;
      for (let i = word.length - 1; i >= 0; i--) {
        const c = word[i];
        const next = node.children.get(c) || new Node(c);
        node.children.set(c, next);
        node = next;
      }
      node.word = true;
    }
  }
  /**
   * @param {character} letter
   * @return {boolean}
   */
  query(letter) {
    this.letters += letter;
    let node = this.root;
    for (let i = this.letters.length - 1; i >= 0; i--) {
      const c = this.letters[i];
      const next = node.children.get(c);
      if (!next) {
        break;
      }
      if (next.word) {
        return true;
      }
      node = next;
    }
    return false;
  }
}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

module.exports = { StreamChecker };
