'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findRestaurant } = require('./');

describe('#findRestaurant', () => {
  const tests = [
    {
      list1: ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
      list2: ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'],
      result: ['Shogun'],
    },
    {
      list1: ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
      list2: ['KFC', 'Shogun', 'Burger King'],
      result: ['Shogun'],
    },
    {
      list1: ['Shogun', 'KFC'],
      list2: ['KFC', 'Shogun', 'Burger King'],
      result: ['KFC', 'Shogun'],
    },
  ];

  _.forEach(tests, ({ list1, list2, result }) => {
    it(`${list1}, ${list2} -> ${result}`, () => {
      assert.deepStrictEqual(findRestaurant(list1, list2), result);
    });
  });
});
