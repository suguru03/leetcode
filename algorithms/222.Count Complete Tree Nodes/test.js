'use strict';

const assert = require('assert');
const _ = require('lodash');
const { countNodes } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#countNodes', () => {
  const tests = [
    {
      root: [1, 2, 3, 4, 5, 6],
      result: 6,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(countNodes(root), result);
    });
  });
});
