'use strict';

const assert = require('assert');
const _ = require('lodash');
const { eventualSafeNodes } = require('./');

describe('#eventualSafeNodes', () => {
  const tests = [
    {
      graph: [[1, 2], [2, 3], [5], [0], [5], [], []],
      result: [2, 4, 5, 6],
    },
    {
      graph: [[0], [2, 3, 4], [3, 4], [0, 4], []],
      result: [4],
    },
    {
      graph: [
        [3, 10],
        [5, 6, 14, 16],
        [],
        [6, 10, 14, 16, 19],
        [16],
        [9, 11, 16, 17],
        [8],
        [16, 19],
        [10, 13, 16, 17, 18, 19],
        [],
        [],
        [2, 12, 13, 16],
        [],
        [1, 14, 16, 17, 18],
        [0, 15, 16, 18, 19],
        [17, 19],
        [17, 18, 19],
        [18, 19],
        [7, 19],
        [],
      ],
      result: [2, 9, 10, 12, 19],
    },
  ];

  _.forEach(tests, ({ graph, result }) => {
    it(`[${graph}] -> [${result}]`, () => {
      assert.deepStrictEqual(eventualSafeNodes(graph), result);
    });
  });
});
