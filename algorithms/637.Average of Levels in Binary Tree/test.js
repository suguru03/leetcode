'use strict';

const assert = require('assert');
const _ = require('lodash');
const { averageOfLevels } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#averageOfLevels', () => {
  const tests = [
    {
      root: [3, 9, 20, 15, 7],
      result: [3, 14.5, 11],
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(averageOfLevels(root), result);
    });
  });
});
