'use strict';

const assert = require('assert');
const _ = require('lodash');

const { maxProduct } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#maxProduct', () => {
  const tests = [
    {
      root: [1, 2, 3, 4, 5, 6],
      result: 110,
    },
    {
      root: [1, null, 2, 3, 4, null, null, 5, 6],
      result: 90,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(maxProduct(root), result);
    });
  });
});
