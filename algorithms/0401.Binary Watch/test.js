'use strict';

const assert = require('assert');
const _ = require('lodash');
const { readBinaryWatch } = require('./');

describe('#readBinaryWatch', () => {
  const tests = [
    {
      n: 1,
      result: ['1:00', '2:00', '4:00', '8:00', '0:01', '0:02', '0:04', '0:08', '0:16', '0:32'].sort(),
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(readBinaryWatch(n).sort(), result);
    });
  });
});
