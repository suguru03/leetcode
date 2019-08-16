'use strict';

const assert = require('assert');
const _ = require('lodash');
const { inorderTraversal } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#inorderTraversal', () => {
  const tests = [
    {
      root: [1, null, 2, 3],
      result: [1, 3, 2],
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(inorderTraversal(root), result);
    });
  });
});
