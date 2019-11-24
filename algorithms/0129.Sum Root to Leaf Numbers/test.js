'use strict';

const assert = require('assert');
const _ = require('lodash');

const { sumNumbers } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#sumNumbers', () => {
  const tests = [
    {
      root: [1, 2, 3],
      result: 25,
    },
    {
      root: [4, 9, 0, 5, 1],
      result: 1026,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(sumNumbers(root), result);
    });
  });
});
