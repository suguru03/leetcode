'use strict';

const assert = require('assert');
const _ = require('lodash');
const { suggestedProducts } = require('./');

describe('#suggestedProducts', () => {
  const tests = [
    {
      products: ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
      searchWord: 'mouse',
      result: [
        ['mobile', 'moneypot', 'monitor'],
        ['mobile', 'moneypot', 'monitor'],
        ['mouse', 'mousepad'],
        ['mouse', 'mousepad'],
        ['mouse', 'mousepad'],
      ],
    },
    {
      products: ['bags', 'baggage', 'banner', 'box', 'cloths'],
      searchWord: 'bags',
      result: [['baggage', 'bags', 'banner'], ['baggage', 'bags', 'banner'], ['baggage', 'bags'], ['bags']],
    },
  ];

  _.forEach(tests, ({ products, searchWord, result }) => {
    it(`${products}, ${searchWord} -> ${result}`, () => {
      assert.deepStrictEqual(suggestedProducts(products, searchWord), result);
    });
  });
});
