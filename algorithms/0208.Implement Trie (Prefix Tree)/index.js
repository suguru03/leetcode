/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.children = Array(26);
    this.word = false;
  }
  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @param {number} [index]
   * @return {void}
   */
  insert(word, index = 0) {
    if (word.length === index) {
      this.word = true;
      return;
    }
    const char = word.charCodeAt(index) - 97;
    this.children[char] = this.children[char] || new Trie();
    this.children[char].insert(word, ++index);
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @param {number} [index]
   * @param {boolean} [prefix]
   * @return {boolean}
   */
  search(word, index = 0, prefix = false) {
    if (word.length === index) {
      return prefix || this.word;
    }
    const char = word.charCodeAt(index) - 97;
    if (!this.children[char]) {
      return false;
    }
    return this.children[char].search(word, ++index, prefix);
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    return this.search(prefix, 0, true);
  }
}
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
