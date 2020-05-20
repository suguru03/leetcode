'use strict';

class StockSpanner {
  stack = [];

  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    const stock = { price, span: 1 };
    while (this.stack.length > 0 && this.stack[this.stack.length - 1].price <= price) {
      stock.span += this.stack.pop().span;
    }
    this.stack.push(stock);
    return stock.span;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

module.exports = { StockSpanner };
