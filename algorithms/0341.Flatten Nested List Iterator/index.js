'use strict';

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
class NestedIterator {
  constructor(nestedList) {
    this.queue = this.#flatten(nestedList);
  }

  #flatten(nestedList) {
    return nestedList.flatMap((nested) => (nested.isInteger() ? nested.getInteger() : this.#flatten(nested.getList())));
  }
  /**
   * @this NestedIterator
   * @returns {boolean}
   */
  hasNext() {
    return this.queue.length !== 0;
  }

  /**
   * @this NestedIterator
   * @returns {integer}
   */
  next() {
    return this.queue.shift();
  }
}

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
