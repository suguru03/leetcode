'use strict';

const assert = require('assert');
const _ = require('lodash');

const { sumEvenGrandparent } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#sumEvenGrandparent', () => {
  const tests = [
    {
      root: [6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5],
      result: 18,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(sumEvenGrandparent(root), result);
    });
  });
});
