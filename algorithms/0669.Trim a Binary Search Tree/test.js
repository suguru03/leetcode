'use strict';

const assert = require('assert');
const _ = require('lodash');
const { trimBST } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#trimBST', () => {
  const tests = [
    {
      root: [1, 0, 2],
      L: 1,
      R: 2,
      result: [1, null, 2],
    },
    {
      root: [3, 0, 4, null, 2, null, null, 1],
      L: 1,
      R: 3,
      result: [3, 2, null, 1],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ root, _root, L, R, result, _result }) => {
    it(`${_root}, ${L}, ${R} -> ${_result}`, () => {
      assert.deepStrictEqual(trimBST(root, L, R), result);
    });
  });
});
