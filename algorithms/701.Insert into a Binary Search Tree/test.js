'use strict';

const assert = require('assert');
const _ = require('lodash');

const { insertIntoBST } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#insertIntoBST', () => {
  const tests = [
    {
      root: [4, 2, 7, 1, 3],
      val: 5,
      result: [4, 2, 7, 1, 3, 5],
    },
    {
      root: [4, 2, 7, 1, 3],
      val: 9,
      result: [4, 2, 7, 1, 3, null, 9],
    },
    {
      root: [4, 2, 7, 1, 3],
      val: 0,
      result: [4, 2, 7, 1, 3, null, null, 0],
    },
    {
      root: [40, 20, 60, 10, 30, 50, 70],
      val: 25,
      result: [40, 20, 60, 10, 30, 50, 70, null, null, 25],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ root, _root, val, result, _result }) => {
    it(`${_root}, ${val} -> ${_result}`, () => {
      assert.deepStrictEqual(insertIntoBST(root, val), result);
    });
  });
});
