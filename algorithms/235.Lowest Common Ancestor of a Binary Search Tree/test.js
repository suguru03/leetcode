'use strict';

const assert = require('assert');
const _ = require('lodash');
const { lowestCommonAncestor } = require('./');
const { TreeNode, makeTestTreeNodes } = require('../util');

describe('#lowestCommonAncestor', () => {
  const tests = [
    {
      root: [6, 2, 8, 9, 4, 7, 9, null, null, 3, 5],
      p: 2,
      q: 8,
      result: 6,
    },
    {
      root: [6, 2, 8, 9, 4, 7, 9, null, null, 3, 5],
      p: 2,
      q: 4,
      result: 2,
    },
  ];
  makeTestTreeNodes(tests);
  _.forEach(tests, test => {
    const { p, q, result } = test;
    test._p = p;
    test._q = q;
    test._result = result;
    test.p = new TreeNode(p);
    test.q = new TreeNode(q);
    test.result = new TreeNode(result);
  });

  _.forEach(tests, ({ root, _root, p, _p, q, _q, result, _result }) => {
    it(`[${_root}], p: ${_p}, q: ${_q} -> ${_result}`, () => {
      assert.strictEqual(lowestCommonAncestor(root, p, q).val, result.val);
    });
  });
});
