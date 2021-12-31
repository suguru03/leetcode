'use strict';

const assert = require('assert');

const { tree2str } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#tree2str', () => {
  const tests = [
    {
      root: [1, 2, 3, 4],
      result: '1(2(4))(3)',
    },
    {
      root: [1, 2, 3, null, 4],
      result: '1(2()(4))(3)',
    },
  ];
  makeTestTreeNodes(tests);

  for (const { root, _root, result } of tests) {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(tree2str(root), result);
    });
  }
});
