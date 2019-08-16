'use strict';

const assert = require('assert');
const _ = require('lodash');
const { fizzBuzz } = require('./');

describe('#fizzBuzz', () => {
  const tests = [
    {
      n: 15,
      result: [
        '1',
        '2',
        'Fizz',
        '4',
        'Buzz',
        'Fizz',
        '7',
        '8',
        'Fizz',
        'Buzz',
        '11',
        'Fizz',
        '13',
        '14',
        'FizzBuzz',
      ],
    },
    {
      n: 0,
      result: [],
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepEqual(fizzBuzz(n), result);
    });
  });
});
