'use strict';

const assert = require('assert');
const _ = require('lodash');
const { luckyNumbers } = require('./');

describe('#sortString', () => {
  const tests = [
    {
      matrix: [[3, 7, 8], [9, 11, 13], [15, 16, 17]],
      result: [15],
    },
  ];

  _.forEach(tests, ({ matrix, result }) => {
    it(`${matrix} -> ${result}`, () => {
      assert.deepStrictEqual(luckyNumbers(matrix), result);
    });
  });
});
