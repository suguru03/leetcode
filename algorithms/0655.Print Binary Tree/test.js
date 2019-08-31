'use strict';

const assert = require('assert');
const _ = require('lodash');
const { printTree } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#printTree', () => {
  const tests = [
    {
      root: [1, 2],
      result: [['', '1', ''], ['2', '', '']],
    },
    {
      root: [1, 2, 3, null, 4],
      result: [['', '', '', '1', '', '', ''], ['', '2', '', '', '', '3', ''], ['', '', '4', '', '', '', '']],
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`[${_root}] -> [${result}]`, () => {
      assert.deepEqual(printTree(root), result);
    });
  });
});
