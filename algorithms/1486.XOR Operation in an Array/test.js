'use strict';

const assert = require('assert');
const _ = require('lodash');

const { xorOperation } = require('./');

describe('#xorOperation', () => {
  const tests = [
    {
      n: 5,
      start: 0,
      result: 8,
    },
    {
      n: 4,
      start: 3,
      result: 8,
    },
    {
      n: 10,
      start: 5,
      result: 2,
    },
  ];

  _.forEach(tests, ({ n, start, result }) => {
    it(`${n}, ${start} -> ${result}`, () => {
      assert.deepStrictEqual(xorOperation(n, start), result);
    });
  });
});
