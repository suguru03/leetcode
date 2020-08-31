'use strict';

const assert = require('assert');
const _ = require('lodash');

const { deleteNode } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#deleteNode', () => {
  const tests = [
    {
      root: [5, 3, 6, 2, 4, null, 7],
      key: 3,
      result: [5, 4, 6, 2, null, null, 7],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ root, _root, key, result, _result }) => {
    it(`${_root}, ${key} -> ${_result}`, () => {
      assert.deepStrictEqual(deleteNode(root, key), result);
    });
  });
});
