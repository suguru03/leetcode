'use strict';

class ProductOfNumbers {
  constructor() {
    this.products = [1];
  }

  /**
   * @param {number} num
   * @return {void}
   */
  add(num) {
    if (num === 0) {
      this.products.length = 1;
      return;
    }
    this.products.push(num * this.products[this.products.length - 1]);
  }

  /**
   * @param {number} k
   * @return {number}
   */
  getProduct(k) {
    const size = this.products.length;
    return k >= size ? 0 : this.products[size - 1] / this.products[size - k - 1];
  }
}

module.exports = { ProductOfNumbers };
