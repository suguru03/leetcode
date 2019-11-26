'use strict';

const assert = require('assert');
const _ = require('lodash');
const { leafSimilar } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#leafSimilar', () => {
  const tests = [
    {
      root1: [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
      root2: [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8],
      result: true,
    },
    {
      root1: [41, 62, null, 66, null, null, 21, 96, null, 70, 74],
      root2: [55, null, 84, null, 29, 116, null, 7, 74, null, 70],
      result: true,
    },
  ];
  makeTestTreeNodes(tests, 'root1');
  makeTestTreeNodes(tests, 'root2');

  _.forEach(tests, ({ root1, _root1, root2, _root2, result }) => {
    it(`${_root1}, ${_root2} -> ${result}`, () => {
      assert.deepStrictEqual(leafSimilar(root1, root2), result);
    });
  });
});
