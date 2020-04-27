'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maximalSquare } = require('./');

describe('#maximalSquare', () => {
  const tests = [
    {
      matrix: [
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
      ],
      result: 4,
    },
    {
      matrix: [
        ['0', '0', '0', '1'],
        ['1', '1', '0', '1'],
        ['1', '1', '1', '1'],
        ['0', '1', '1', '1'],
        ['0', '1', '1', '1'],
      ],
      result: 9,
    },
  ];

  _.forEach(tests, ({ matrix, result }) => {
    it(`${matrix} -> ${result}`, () => {
      assert.deepStrictEqual(maximalSquare(matrix), result);
    });
  });
});
