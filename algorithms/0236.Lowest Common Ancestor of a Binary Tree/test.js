'use strict';

const assert = require('assert');

const { lowestCommonAncestor } = require('./');
const { TreeNode, makeTestTreeNodes } = require('../util');

describe('#lowestCommonAncestor', () => {
  const tests = [
    {
      root: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
      p: 5,
      q: 1,
      result: 3,
    },
    {
      root: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
      p: 5,
      q: 4,
      result: 5,
    },
    {
      root: [1, 2],
      p: 1,
      q: 2,
      result: 1,
    },
  ];
  makeTestTreeNodes(tests);
  for (const test of tests) {
    const { p, q, result } = test;
    test._p = p;
    test._q = q;
    test._result = result;
    test.p = new TreeNode(p);
    test.q = new TreeNode(q);
    test.result = new TreeNode(result);
  }

  for (const { root, _root, p, _p, q, _q, result, _result } of tests) {
    it(`${_root}, ${_p}, ${_q} -> ${_result}`, () => {
      assert.deepStrictEqual(lowestCommonAncestor(root, p, q).val, result.val);
    });
  }
});
