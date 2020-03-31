'use strict';

const assert = require('assert');
const _ = require('lodash');
const { numTeams } = require('./');

describe('#numTeams', () => {
  const tests = [
    {
      rating: [2, 5, 3, 4, 1],
      result: 3,
    },
    {
      rating: [2, 1, 3],
      result: 0,
    },
    {
      rating: [1, 2, 3, 4],
      result: 4,
    },
  ];

  _.forEach(tests, ({ rating, result }) => {
    it(`${rating} -> ${result}`, () => {
      assert.deepStrictEqual(numTeams(rating), result);
    });
  });
});
