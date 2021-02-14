'use strict';

const assert = require('assert');
const _ = require('lodash');

const { isBipartite } = require('./');

describe('#isBipartite', () => {
  const tests = [
    {
      graph: [
        [1, 3],
        [0, 2],
        [1, 3],
        [0, 2],
      ],
      result: true,
    },
    {
      graph: [
        [1, 2, 3],
        [0, 2],
        [0, 1, 3],
        [0, 2],
      ],
      result: false,
    },
    {
      graph: [[1], [0, 3], [3], [1, 2]],
      result: true,
    },
  ];

  _.forEach(tests, ({ graph, result }) => {
    it(`${graph} -> ${result}`, () => {
      assert.deepStrictEqual(isBipartite(graph), result);
    });
  });
});
