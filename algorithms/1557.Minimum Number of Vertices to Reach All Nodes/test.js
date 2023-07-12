'use strict';

const assert = require('assert');
const _ = require('lodash');

const { findSmallestSetOfVertices } = require('./');

describe('#findSmallestSetOfVertices', () => {
  const tests = [
    {
      n: 6,
      edges: [
        [0, 1],
        [0, 2],
        [2, 5],
        [3, 4],
        [4, 2],
      ],
      result: [0, 3],
    },
    {
      n: 5,
      edges: [
        [0, 1],
        [2, 1],
        [3, 1],
        [1, 4],
        [2, 4],
      ],
      result: [0, 2, 3],
    },
  ];

  _.forEach(tests, ({ n, edges, result }) => {
    it(`${edges} -> ${result}`, () => {
      assert.deepStrictEqual(findSmallestSetOfVertices(n, edges), result);
    });
  });
});
