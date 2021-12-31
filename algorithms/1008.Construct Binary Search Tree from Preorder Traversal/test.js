'use strict';

const assert = require('assert');

const { bstFromPreorder } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#bstFromPreorder', () => {
  const tests = [
    {
      preorder: [8, 5, 1, 7, 10, 12],
      result: [8, 5, 10, 1, 7, null, 12],
    },
    {
      preorder: [4, 2],
      result: [4, 2],
    },
  ];
  makeTestTreeNodes(tests, 'result');

  for (const { preorder, result, _result } of tests) {
    it(`${preorder} -> ${_result}`, () => {
      assert.deepStrictEqual(bstFromPreorder(preorder), result);
    });
  }
});
