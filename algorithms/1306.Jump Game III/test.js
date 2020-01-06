'use strict';

const assert = require('assert');
const _ = require('lodash');
const { canReach } = require('./');

describe('#canReach', () => {
  const tests = [
    {
      arr: [4, 2, 3, 0, 3, 1, 2],
      start: 5,
      result: true,
    },
    {
      arr: [4, 2, 3, 0, 3, 1, 2],
      start: 0,
      result: true,
    },
    {
      arr: [3, 0, 2, 1, 2],
      start: 2,
      result: false,
    },
  ];

  _.forEach(tests, ({ arr, start, result }) => {
    it(`${arr}, ${start} -> ${result}`, () => {
      assert.deepStrictEqual(canReach(arr, start), result);
    });
  });
});
