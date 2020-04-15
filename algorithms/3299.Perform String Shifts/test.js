'use strict';

const assert = require('assert');
const _ = require('lodash');

const { stringShift } = require('./');

describe('#stringShift', () => {
  const tests = [
    {
      s: 'abc',
      shift: [[0, 1], [1, 2]],
      result: 'cab',
    },
    {
      s: 'abcdefg',
      shift: [[1, 1], [1, 1], [0, 2], [1, 3]],
      result: 'efgabcd',
    },
  ];

  _.forEach(tests, ({ s, shift, result }) => {
    it(`${s}, ${shift} -> ${result}`, () => {
      assert.deepStrictEqual(stringShift(s, shift), result);
    });
  });
});
