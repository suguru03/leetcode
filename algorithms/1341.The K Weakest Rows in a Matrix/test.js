'use strict';

const assert = require('assert');
const _ = require('lodash');
const { kWeakestRows } = require('./');

describe('#kWeakestRows', () => {
  const tests = [
    {
      mat: [[1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, 0, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1]],
      k: 3,
      result: [2, 0, 3],
    },
  ];

  _.forEach(tests, ({ mat, k, result }) => {
    it(`${mat}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(kWeakestRows(mat, k), result);
    });
  });
});
