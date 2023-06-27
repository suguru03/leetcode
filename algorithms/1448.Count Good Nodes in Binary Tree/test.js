'use strict';

const assert = require('assert');
const _ = require('lodash');

const { goodNodes } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#goodNodes', () => {
  const tests = [
    {
      root: [3, 1, 4, 3, null, 1, 5],
      result: 4,
    },
    {
      root: [3, 3, null, 4, 2],
      result: 3,
    },
    {
      root: [1],
      result: 1,
    },
    {
      root: [
        -1,
        5,
        -2,
        4,
        4,
        2,
        -2,
        null,
        null,
        -4,
        null,
        -2,
        3,
        null,
        -2,
        0,
        null,
        -1,
        null,
        -3,
        null,
        -4,
        -3,
        3,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        3,
        -3,
      ],
      result: 5,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(goodNodes(root), result);
    });
  });
});
