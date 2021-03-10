'use strict';

const assert = require('assert');

const { addOneRow } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#addOneRow', () => {
  const tests = [
    {
      root: [4, 2, 6, 3, 1, 5],
      v: 1,
      d: 1,
      result: [1, 4, null, 2, 6, 3, 1, 5],
    },
    {
      root: [4, 2, 6, 3, 1, 5],
      v: 11,
      d: 3,
      result: [4, 2, 6, 11, 11, 11, 11, 3, null, null, 1, 5],
    },
  ];
  makeTestTreeNodes(tests, 'root');
  makeTestTreeNodes(tests, 'result');

  for (const { root, _root, v, d, result, _result } of tests) {
    it(`${_root}, ${v}, ${d} -> ${_result}`, () => {
      assert.deepStrictEqual(addOneRow(root, v, d), result);
    });
  }
});
