'use strict';

const assert = require('assert');

const { flatten } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#flatten', () => {
  const tests = [
    {
      root: [1, 2, 5, 3, 4, null, 6],
      result: [1, null, 2, null, 3, null, 4, null, 5, null, 6],
    },
    {
      root: [0],
      result: [0],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result');

  for (const { root, _root, result, _result } of tests) {
    it(`${_root} -> ${_result}`, () => {
      flatten(root);
      assert.deepStrictEqual(root, result);
    });
  }
});
