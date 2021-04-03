'use strict';

const assert = require('assert');

const { findMaxForm } = require('./');

describe('#findMaxForm', () => {
  const tests = [
    {
      strs: ['10', '0001', '111001', '1', '0'],
      m: 5,
      n: 3,
      result: 4,
    },
    {
      strs: ['10', '0', '1'],
      m: 1,
      n: 1,
      result: 2,
    },
    {
      strs: ['111', '1000', '1000', '1000'],
      m: 9,
      n: 3,
      result: 3,
    },
  ];

  for (const { strs, m, n, result } of tests) {
    it(`${strs}, ${m}, ${n} -> ${result}`, () => {
      assert.deepStrictEqual(findMaxForm(strs, m, n), result);
    });
  }
});
