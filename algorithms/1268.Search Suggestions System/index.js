'use strict';

module.exports = { suggestedProducts, suggestedProducts2 };

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
function suggestedProducts(products, searchWord) {
  products.sort();
  let prev = products;
  const result = [];
  for (let i = 0; i < searchWord.length; i++) {
    const c = searchWord[i];
    prev = prev.filter(str => str[i] === c);
    result.push(prev.slice(0, 3));
  }
  return result;
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
function suggestedProducts2(products, searchWord) {
  products.sort();
  const result = Array.from(searchWord, () => []);
  for (const product of products) {
    let left = 0;
    let right = product.length;
    while (left < right) {
      const mid = (1 + (left + right) / 2) | 0;
      if (product.slice(0, mid) === searchWord.slice(0, mid)) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
    for (let index = 0; index < left; index++) {
      if (result[index].length === 3) {
        continue;
      }
      result[index].push(product);
    }
  }
  return result;
}
