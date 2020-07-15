'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minSetSize } = require('./');

describe('#minSetSize', () => {
  const tests = [
    {
      arr: [3, 3, 3, 3, 5, 5, 5, 2, 2, 7],
      result: 2,
    },
  ];

  _.forEach(tests, ({ arr, result }) => {
    it(`${arr} -> ${result}`, () => {
      assert.deepStrictEqual(minSetSize(arr), result);
    });
  });
});
