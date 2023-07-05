'use strict';

const assert = require('assert');
const _ = require('lodash');

const { validPath } = require('./');

describe('#validPath', () => {
  const tests = [
    {
      n: 3,
      edges: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      source: 0,
      destination: 2,
      result: true,
    },
  ];

  _.forEach(tests, ({ n, edges, source, destination, result }) => {
    it(`${n}, ${edges}, ${source}, ${destination} -> ${result}`, () => {
      assert.deepStrictEqual(validPath(n, edges, source, destination), result);
    });
  });
});
