'use strict';

const assert = require('assert');
const _ = require('lodash');
const { distributeCandies } = require('./');

describe('#distributeCandies', () => {
  const tests = [
    {
      candies: 7,
      num_people: 4,
      result: [1, 2, 3, 1],
    },
    {
      candies: 10,
      num_people: 3,
      result: [5, 2, 3],
    },
  ];

  _.forEach(tests, ({ candies, num_people, result }) => {
    it(`${candies}, ${num_people} -> ${result}`, () => {
      assert.deepStrictEqual(distributeCandies(candies, num_people), result);
    });
  });
});
