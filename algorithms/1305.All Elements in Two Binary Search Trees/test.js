'use strict';

const assert = require('assert');

const { getAllElements } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#getAllElements', () => {
  const tests = [
    {
      root1: [2, 1, 4],
      root2: [1, 0, 3],
      result: [0, 1, 1, 2, 3, 4],
    },
    {
      root1: [],
      root2: [5, 1, 7, 0, 2],
      result: [0, 1, 2, 5, 7],
    },
    {
      root1: [0, null, 59, 57, 90],
      root2: [60, 17, 74, 6, 20, 63, 97, null, null, null, null, null, null, 95],
      result: [0, 6, 17, 20, 57, 59, 60, 63, 74, 90, 95, 97],
    },
  ];
  makeTestTreeNodes(tests, 'root1');
  makeTestTreeNodes(tests, 'root2');

  for (const { root1, _root1, root2, _root2, result } of tests) {
    it(`${_root1}, ${_root2} -> ${result}`, () => {
      assert.deepStrictEqual(getAllElements(root1, root2), result);
    });
  }
});
