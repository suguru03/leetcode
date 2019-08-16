'use strict';

const assert = require('assert');
const _ = require('lodash');
const { sumOfLeftLeaves } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#sumOfLeftLeaves', () => {
  const tests = [
    {
      root: [3, 9, 20, null, null, 15, 7],
      result: 24,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(sumOfLeftLeaves(root), result);
    });
  });
});
