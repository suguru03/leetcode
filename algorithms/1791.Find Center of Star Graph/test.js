'use strict';

const assert = require('assert');
const _ = require('lodash');

const { findCenter } = require('./');

describe('#findCenter', () => {
  const tests = [
    {
      edges: [
        [1, 2],
        [2, 3],
        [4, 2],
      ],
      result: 2,
    },
    {
      edges: [
        [1, 2],
        [5, 1],
        [1, 3],
        [1, 4],
      ],
      result: 1,
    },
  ];

  _.forEach(tests, ({ edges, result }) => {
    it(`${edges} -> ${result}`, () => {
      assert.deepStrictEqual(findCenter(edges), result);
    });
  });
});
