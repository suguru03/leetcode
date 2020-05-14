'use strict';

const assert = require('assert');
const _ = require('lodash');
const { removeKdigits } = require('./');

describe('#removeKdigits', () => {
  const tests = [
    {
      num: '1432219',
      k: 3,
      result: '1219',
    },
    {
      num: '10200',
      k: 1,
      result: '200',
    },
    {
      num: '10',
      k: 2,
      result: '0',
    },
    {
      num: '9',
      k: 1,
      result: '0',
    },
    {
      num: '112',
      k: 1,
      result: '11',
    },
    {
      num: '126745486007122190009',
      k: 4,
      result: '12446007122190009',
    },
  ];

  _.forEach(tests, ({ num, k, result }) => {
    it(`${num}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(removeKdigits(num, k), result);
    });
  });
});
