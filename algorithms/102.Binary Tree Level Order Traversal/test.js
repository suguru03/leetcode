'use strict';

const assert = require('assert');
const _ = require('lodash');
const { levelOrder } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#levelOrder', () => {
  const tests = [
    {
      root: [3, 9, 20, null, null, 15, 7],
      result: [[3], [9, 20], [15, 7]],
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(levelOrder(root), result);
    });
  });
});
