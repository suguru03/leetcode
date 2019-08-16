'use strict';

const assert = require('assert');
const _ = require('lodash');
const { countSegments } = require('./');

describe('#countSegments', () => {
  const tests = [
    {
      s: 'Hello, my name is John',
      result: 5,
    },
    {
      s: '                 ',
      result: 0,
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(countSegments(s), result);
    });
  });
});
