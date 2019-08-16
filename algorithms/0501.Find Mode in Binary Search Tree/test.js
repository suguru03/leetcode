'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findMode } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#findMode', () => {
  const tests = [
    {
      root: [1, null, 2, 2],
      result: [2],
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(findMode(root), result);
    });
  });
});
