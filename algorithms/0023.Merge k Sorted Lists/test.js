'use strict';

const assert = require('assert');
const _ = require('lodash');

const { mergeKLists } = require('./');
const { makeLinkNodes } = require('../utils');

describe('#mergeKLists', () => {
  const tests = [
    {
      lists: [
        [1, 4, 5],
        [1, 3, 4],
        [2, 6],
      ],
      result: [1, 1, 2, 3, 4, 4, 5, 6],
    },
    {
      lists: [[]],
      result: null,
    },
    {
      lists: [
        [-6, -4, 0, 0, 4],
        [],
        [-4, -2, -1, 1, 2, 3],
        [-9, -6, -5, -2, 4, 4],
        [-9, -6, -5, -2, -1, 3],
        [-2, -1, 0],
        [-6],
        [-8, -1, 0, 2],
      ],
      result: [
        -9,
        -9,
        -8,
        -6,
        -6,
        -6,
        -6,
        -5,
        -5,
        -4,
        -4,
        -2,
        -2,
        -2,
        -2,
        -1,
        -1,
        -1,
        -1,
        0,
        0,
        0,
        0,
        1,
        2,
        2,
        3,
        3,
        4,
        4,
        4,
      ],
    },
  ];

  _.forEach(tests, ({ lists, result }) => {
    it(`${lists} -> ${result}`, () => {
      assert.deepStrictEqual(mergeKLists(lists.map((list) => makeLinkNodes(list))), makeLinkNodes(result));
    });
  });
});
