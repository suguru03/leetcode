'use strict';

const assert = require('assert');

const { pacificAtlantic } = require('./');

describe('#pacificAtlantic', () => {
  const tests = [
    {
      matrix: [
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4],
      ],
      result: [
        [0, 4],
        [1, 3],
        [1, 4],
        [2, 2],
        [3, 0],
        [3, 1],
        [4, 0],
      ],
    },
  ];

  const iter = (a1, a2) => a1.join(':').localeCompare(a2.join(':'));
  for (const { matrix, result } of tests) {
    it(`${matrix} -> ${result}`, () => {
      assert.deepStrictEqual(pacificAtlantic(matrix).sort(iter), result.sort(iter));
    });
  }
});
