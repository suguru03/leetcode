'use strict';

const assert = require('assert');
const _ = require('lodash');

const { reconstructQueue } = require('./');

describe('#reconstructQueue', () => {
  const tests = [
    {
      people: [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]],
      result: [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]],
    },
  ];

  _.forEach(tests, ({ people, result }) => {
    it(`${people} -> ${result}`, () => {
      assert.deepStrictEqual(reconstructQueue(people), result);
    });
  });
});
