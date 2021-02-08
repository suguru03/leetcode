/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
class PeekingIterator {
  constructor(iterator) {
    this.iterator = iterator;
    this.current = null;
    this.next();
  }

  /**
   * @return {number|null}
   */
  peek() {
    return this.current;
  }

  /**
   * @return {number|null}
   */
  next() {
    const prev = this.current;
    this.current = this.iterator.hasNext() ? this.iterator.next() : null;
    return prev;
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.current !== null;
  }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
