'use strict';

const assert = require('assert');
const _ = require('lodash');

const { evaluateTree } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#evaluateTree', () => {
  const tests = [
    {
      root: [2, 1, 3, null, null, 0, 1],
      result: true,
    },
    {
      root: [
        3,
        3,
        2,
        0,
        0,
        3,
        2,
        null,
        null,
        null,
        null,
        1,
        3,
        1,
        1,
        null,
        null,
        2,
        1,
        null,
        null,
        null,
        null,
        1,
        1,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
      result: false,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`[${_root}] -> ${result}`, () => {
      assert.strictEqual(evaluateTree(root), result);
    });
  });
});
