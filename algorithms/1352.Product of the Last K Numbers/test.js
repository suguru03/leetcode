'use strict';

const assert = require('assert');

const { ProductOfNumbers } = require('./');

describe('ProductOfNumbers', () => {
  it('should work', () => {
    const productOfNumbers = new ProductOfNumbers();
    productOfNumbers.add(3); // [3]
    productOfNumbers.add(0); // [3,0]
    productOfNumbers.add(2); // [3,0,2]
    productOfNumbers.add(5); // [3,0,2,5]
    productOfNumbers.add(4); // [3,0,2,5,4]
    assert.strictEqual(productOfNumbers.getProduct(2), 20); // return 20. The product of the last 2 numbers is 5 * 4 = 20
    assert.strictEqual(productOfNumbers.getProduct(3), 40); // return 40. The product of the last 3 numbers is 2 * 5 * 4 = 40
    assert.strictEqual(productOfNumbers.getProduct(4), 0); // return 0. The product of the last 4 numbers is 0 * 2 * 5 * 4 = 0
    productOfNumbers.add(8); // [3,0,2,5,4,8]
    assert.strictEqual(productOfNumbers.getProduct(2), 32); // return 32. The product of the last 2 numbers is 4 * 8 = 32
  });
});
