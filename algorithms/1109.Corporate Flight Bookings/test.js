'use strict';

const assert = require('assert');
const _ = require('lodash');
const { corpFlightBookings } = require('./');

describe('#corpFlightBookings', () => {
  const tests = [
    {
      bookings: [[1, 2, 10], [2, 3, 20], [2, 5, 25]],
      n: 5,
      result: [10, 55, 45, 25, 25],
    },
  ];

  _.forEach(tests, ({ bookings, n, result }) => {
    it(`${bookings}, ${n} -> ${result}`, () => {
      assert.deepStrictEqual(corpFlightBookings(bookings, n), result);
    });
  });
});
