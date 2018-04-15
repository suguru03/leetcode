'use strict';

const assert = require('assert');

const _ = require('lodash');

const { ambiguousCoordinates } = require('./');

describe('#ambiguousCoordinates', () => {
  const tests = [
    {
      S: '(123)',
      result: ['(1, 23)', '(12, 3)', '(1.2, 3)', '(1, 2.3)'],
    },
    {
      S: '(00011)',
      result: ['(0.001, 1)', '(0, 0.011)'],
    },
    {
      S: '(0123)',
      result: [
        '(0, 123)',
        '(0, 12.3)',
        '(0, 1.23)',
        '(0.1, 23)',
        '(0.1, 2.3)',
        '(0.12, 3)',
      ],
    },
    {
      S: '(100)',
      result: ['(10, 0)'],
    },
  ];

  _.forEach(tests, ({ S, result }) => {
    it(`S: ${S} => ${result}`, () => {
      assert.deepStrictEqual(ambiguousCoordinates(S).sort(), result.sort());
    });
  });
});
