/**
 * Initialize your data structure here.
 */
class WordDictionary {
  constructor() {
    this.root = new Node();
  }
  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let node = this.root;
    for (const c of word) {
      if (!node.children.has(c)) {
        node.children.set(c, new Node(c, false));
      }
      node = node.children.get(c);
    }
    node.word = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    return this.dfs(word, 0, this.root);
  }

  dfs(word, index, node) {
    if (word.length === index) {
      return node?.word ?? false;
    }
    const c = word[index++];
    if (c === '.') {
      return Array.from(node.children.values()).some((child) => this.dfs(word, index, child));
    }
    node = node.children.get(c);
    if (node?.character !== c) {
      return false;
    }
    return this.dfs(word, index, node);
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

class Node {
  constructor(character, word) {
    this.character = character;
    this.word = word;
    this.children = new Map();
  }
}
