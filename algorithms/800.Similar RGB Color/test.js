'use strict';

const assert = require('assert');
const _ = require('lodash');
const similarRGB = require('./');

describe('#similarRGB', () => {
  const tests = [
    {
      color: '#09f166',
      result: '#11ee66',
    },
  ];

  _.forEach(tests, ({ color, result }) => {
    it(`${color} -> ${result}`, () => {
      assert.strictEqual(similarRGB(color), result);
    });
  });
});
