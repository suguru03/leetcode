'use strict';

const assert = require('assert');
const _ = require('lodash');

const { findCircleNum } = require('./');

describe('#findCircleNum', () => {
  const tests = [
    {
      isConnected: [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
      ],
      result: 2,
    },
    {
      isConnected: [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
      result: 3,
    },
  ];

  _.forEach(tests, ({ isConnected, result }) => {
    it(`${isConnected} -> ${result}`, () => {
      assert.deepStrictEqual(findCircleNum(isConnected), result);
    });
  });
});
