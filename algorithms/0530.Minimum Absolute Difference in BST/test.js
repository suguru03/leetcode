'use strict';

const assert = require('assert');
const _ = require('lodash');
const { getMinimumDifference } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#getMinimumDifference', () => {
  const tests = [
    {
      root: [1, null, 3, 2],
      result: 1,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(getMinimumDifference(root), result);
    });
  });
});
