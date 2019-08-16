'use strict';

const assert = require('assert');
const _ = require('lodash');
const { MyCalendar } = require('./');

describe('#MyCalendar', () => {
  const tests = [
    {
      input: [[10, 20], [15, 25], [20, 30]],
      result: [true, false, true],
    },
    {
      input: [
        [47, 50],
        [33, 41],
        [39, 45],
        [33, 42],
        [25, 32],
        [26, 35],
        [19, 25],
        [3, 8],
        [8, 13],
        [18, 27],
      ],
      result: [true, true, false, false, true, false, true, true, true, false],
    },
    {
      input: [[37, 50], [33, 50], [4, 17], [35, 48], [8, 25]],
      result: [true, false, true, false, false],
    },
  ];

  _.forEach(tests, ({ input, result }) => {
    it(`${input} -> ${result}`, () => {
      const calender = new MyCalendar();
      for (let i = 0; i < input.length; i++) {
        const [start, end] = input[i];
        assert.strictEqual(calender.book(start, end), result[i], `start: ${start}, end: ${end}`);
      }
    });
  });
});
