'use strict';

const assert = require('assert');
const _ = require('lodash');

const { checkTree } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#checkTree', () => {
  const tests = [
    {
      root: [10, 4, 6],
      result: true,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(checkTree(root), result);
    });
  });
});
