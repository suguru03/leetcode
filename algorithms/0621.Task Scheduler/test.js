'use strict';

const assert = require('assert');
const _ = require('lodash');

const { leastInterval } = require('./');

describe('#leastInterval', () => {
  const tests = [
    {
      tasks: ['A', 'A', 'A', 'B', 'B', 'B'],
      n: 2,
      result: 8,
    },
    {
      tasks: ['A', 'A', 'A', 'B', 'B', 'B'],
      n: 0,
      result: 6,
    },
    {
      tasks: ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
      n: 2,
      result: 16,
    },
    {
      tasks: ['A', 'B', 'C', 'A', 'B'],
      n: 2,
      result: 5,
    },
    {
      tasks: [
        'A',
        'A',
        'B',
        'B',
        'C',
        'C',
        'D',
        'D',
        'E',
        'E',
        'F',
        'F',
        'G',
        'G',
        'H',
        'H',
        'I',
        'I',
        'J',
        'J',
        'K',
        'K',
        'L',
        'L',
        'M',
        'M',
        'N',
        'N',
        'O',
        'O',
        'P',
        'P',
        'Q',
        'Q',
        'R',
        'R',
        'S',
        'S',
        'T',
        'T',
        'U',
        'U',
        'V',
        'V',
        'W',
        'W',
        'X',
        'X',
        'Y',
        'Y',
        'Z',
        'Z',
      ],
      n: 2,
      result: 52,
    },
  ];

  _.forEach(tests, ({ tasks, n, result }) => {
    it(`${tasks}, ${n} -> ${result}`, () => {
      assert.deepStrictEqual(leastInterval(tasks, n), result);
    });
  });
});
