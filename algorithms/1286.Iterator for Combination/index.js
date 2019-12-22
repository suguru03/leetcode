'use strict';

class CombinationIterator {
  /**
   * @param {string} characters
   * @param {number} combinationLength
   */
  constructor(characters, combinationLength) {
    const list = [];
    create(-1, '', 0);
    this.list = list;

    function create(index, str, bit) {
      if (str.length === combinationLength) {
        list.push(str);
        return;
      }
      while (++index < characters.length) {
        if (bit & (1 << index)) {
          continue;
        }
        create(index, str + characters[index], bit | (1 << index));
      }
    }
  }

  /**
   * @return {string}
   */
  next() {
    return this.list.shift();
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.list.length !== 0;
  }
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

module.exports = { CombinationIterator };
