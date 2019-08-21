'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxLevelSum } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#maxLevelSum', () => {
  const tests = [
    {
      root: [1, 7, 0, 7, -8, null, null],
      result: 2,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(maxLevelSum(root), result);
    });
  });
});
