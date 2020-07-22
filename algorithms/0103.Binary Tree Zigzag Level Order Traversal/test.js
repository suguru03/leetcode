'use strict';

const assert = require('assert');
const _ = require('lodash');

const { makeTestTreeNodes } = require('../util');
const { zigzagLevelOrder } = require('./');

describe('#zigzagLevelOrder', () => {
  const tests = [
    {
      root: [3, 9, 20, null, null, 15, 7],
      result: [[3], [20, 9], [15, 7]],
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(zigzagLevelOrder(root), result);
    });
  });
});
