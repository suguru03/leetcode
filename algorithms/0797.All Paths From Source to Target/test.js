'use strict';

const assert = require('assert');
const _ = require('lodash');
const { allPathsSourceTarget } = require('./');

describe('#allPathsSourceTarget', () => {
  const tests = [
    {
      graph: [[1, 2], [3], [3], []],
      result: [
        [0, 1, 3],
        [0, 2, 3],
      ],
    },
  ];

  _.forEach(tests, ({ graph, result }) => {
    it(`graph: [${graph}] => [${result}]`, () => {
      assert.deepStrictEqual(allPathsSourceTarget(graph), result);
    });
  });
});
