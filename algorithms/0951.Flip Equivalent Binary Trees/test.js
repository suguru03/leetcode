'use strict';

const assert = require('assert');
const _ = require('lodash');
const { flipEquiv } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#flipEquiv', () => {
  const tests = [
    {
      root1: [1, 2, 3, 4, 5, 6, null, null, null, 7, 8],
      root2: [1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7],
      result: true,
    },
  ];
  makeTestTreeNodes(tests, 'root1');
  makeTestTreeNodes(tests, 'root2');

  _.forEach(tests, ({ root1, _root1, root2, _root2, result }) => {
    it(`${_root1}, ${_root2} -> ${result}`, () => {
      assert.deepStrictEqual(flipEquiv(root1, root2), result);
    });
  });
});
