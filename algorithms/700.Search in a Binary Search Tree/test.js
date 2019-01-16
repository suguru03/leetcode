'use strict';

const assert = require('assert');
const _ = require('lodash');
const { searchBST } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#searchBST', () => {
  const tests = [
    {
      root: [4, 2, 7, 1, 3],
      val: 2,
      result: [2, 1, 3],
    },
    {
      root: [2, 1, 3],
      val: 5,
      result: [],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ root, _root, val, result, _result }) => {
    it(`${_root}, ${val} -> ${_result}`, () => {
      assert.deepStrictEqual(searchBST(root, val), result);
    });
  });
});
