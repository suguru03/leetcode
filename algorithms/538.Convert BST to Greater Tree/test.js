'use strict';

const assert = require('assert');
const _ = require('lodash');
const { convertBST } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#convertBST', () => {
  const tests = [
    {
      root: [5, 2, 13],
      result: [18, 20, 13],
    },
    {
      root: [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15],
      result: [92, 114, 54, 119, 105, 75, 29, 120, 117, 110, 99, 84, 65, 42, 15],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ root, _root, result, _result }) => {
    it(`${_root} -> ${_result}`, () => {
      assert.deepStrictEqual(convertBST(root), result);
    });
  });
});
