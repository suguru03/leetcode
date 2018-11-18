'use strict';

const assert = require('assert');
const _ = require('lodash');
const { diStringMatch } = require('./');

describe('#diStringMatch', () => {
  const tests = [
    {
      S: 'IDID',
      result: [0, 4, 1, 3, 2],
    },
    {
      S: 'III',
      result: [0, 1, 2, 3],
    },
    {
      S: 'DDI',
      result: [3, 2, 0, 1],
    },
  ];

  _.forEach(tests, ({ S, result }) => {
    it(`${S} -> ${result}`, () => {
      assert.deepStrictEqual(diStringMatch(S), result);
    });
  });
});
