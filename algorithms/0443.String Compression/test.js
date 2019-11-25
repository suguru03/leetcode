'use strict';

const assert = require('assert');
const _ = require('lodash');
const { compress } = require('./');

describe('#compress', () => {
  const tests = [
    {
      chars: ['a', 'a', 'b', 'b', 'c', 'c', 'c'],
      res: ['a', '2', 'b', '2', 'c', '3'],
      result: 6,
    },
    {
      chars: ['c', 'b', 'c', 'c', 'a', 'a', 'b', 'b', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c'],
      res: ['c', 'b', 'c', '2', 'a', '2', 'b', '2', 'c', '1', '0'],
      result: 11,
    },
    {
      chars: ['c', 'b', 'c', 'c', 'a', 'a', 'b', 'b', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'a'],
      res: ['c', 'b', 'c', '2', 'a', '2', 'b', '2', 'c', '1', '0', 'a'],
      result: 12,
    },
  ];

  _.forEach(tests, ({ chars, res, result }) => {
    it(`${chars} -> ${res}`, () => {
      assert.deepStrictEqual(compress(chars), result);
      assert.deepStrictEqual(chars.slice(0, result), res);
    });
  });
});
