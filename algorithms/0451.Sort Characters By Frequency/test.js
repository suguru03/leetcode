'use strict';

const assert = require('assert');
const _ = require('lodash');
const { frequencySort } = require('./');

describe('#frequencySort', () => {
  const tests = [
    {
      s: 'tree',
      result: 'eetr',
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(frequencySort(s), result);
    });
  });
});
