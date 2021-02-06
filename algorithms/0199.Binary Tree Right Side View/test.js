'use strict';

const assert = require('assert');

const { rightSideView } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#rightSideView', () => {
  const tests = [
    {
      root: [1, 2, 3, null, 5, null, 4],
      result: [1, 3, 4],
    },
  ];
  makeTestTreeNodes(tests);

  for (const { root, _root, result } of tests) {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(rightSideView(root), result);
    });
  }
});
