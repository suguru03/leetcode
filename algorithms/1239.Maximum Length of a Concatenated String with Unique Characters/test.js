'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxLength } = require('./');

describe('#maxLength', () => {
  const tests = [
    {
      arr: ['un', 'iq', 'ue'],
      result: 4,
    },
    {
      arr: ['cha', 'r', 'act', 'ers'],
      result: 6,
    },
    {
      arr: ['abcdefghijklmnopqrstuvwxyz'],
      result: 26,
    },
  ];

  _.forEach(tests, ({ arr, result }) => {
    it(`${arr} -> ${result}`, () => {
      assert.deepStrictEqual(maxLength(arr), result);
    });
  });
});
