'use strict';

const assert = require('assert');
const _ = require('lodash');
const { filterRestaurants } = require('./');

describe('#filterRestaurants', () => {
  const tests = [
    {
      restaurants: [[1, 4, 1, 40, 10], [2, 8, 0, 50, 5], [3, 8, 1, 30, 4], [4, 10, 0, 10, 3], [5, 1, 1, 15, 1]],
      veganFriendly: 1,
      maxPrice: 50,
      maxDistance: 10,
      result: [3, 1, 5],
    },
  ];

  _.forEach(tests, ({ restaurants, veganFriendly, maxPrice, maxDistance, result }) => {
    it(`${restaurants}, ${veganFriendly}, ${maxPrice}, ${maxDistance} -> ${result}`, () => {
      assert.deepStrictEqual(filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance), result);
    });
  });
});
