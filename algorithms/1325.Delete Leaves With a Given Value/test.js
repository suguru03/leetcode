'use strict';

const assert = require('assert');
const _ = require('lodash');
const { removeLeafNodes } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#removeLeafNodes', () => {
  const tests = [
    {
      root: [1, 2, 3, 2, null, 2, 4],
      target: 2,
      result: [1, null, 3, null, 4],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ _root, root, target, _result, result }) => {
    it(`${_root}, ${target} -> ${_result}`, () => {
      assert.deepStrictEqual(removeLeafNodes(root, target), result);
    });
  });
});
