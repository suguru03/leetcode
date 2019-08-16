'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findTilt } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#findTilt', () => {
  const tests = [
    {
      root: [1, 2, 3],
      result: 1,
    },
    {
      root: [1, 2, 3, 1, 2],
      result: 3,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(findTilt(root), result);
    });
  });
});
