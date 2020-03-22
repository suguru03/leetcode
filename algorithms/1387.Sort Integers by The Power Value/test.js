'use strict';

const assert = require('assert');
const _ = require('lodash');

const { getKth } = require('./');

describe('#getKth', () => {
  const tests = [
    {
      lo: 12,
      hi: 15,
      k: 2,
      result: 13,
    },
  ];

  _.forEach(tests, ({ lo, hi, k, result }) => {
    it(`${lo}, ${hi}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(getKth(lo, hi, k), result);
    });
  });
});
