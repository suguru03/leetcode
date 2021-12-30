'use strict';

const assert = require('assert');

const { buildTree } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#buildTree', () => {
  const tests = [
    {
      preorder: [3, 9, 20, 15, 7],
      inorder: [9, 3, 15, 20, 7],
      result: [3, 9, 20, null, null, 15, 7],
    },
  ];
  makeTestTreeNodes(tests, 'result');

  for (const { preorder, inorder, result, _result } of tests) {
    it(`${preorder}, ${inorder} -> ${_result}`, () => {
      assert.deepStrictEqual(buildTree(preorder, inorder), result);
    });
  }
});
