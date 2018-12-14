'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findAndReplacePattern } = require('./');

describe('#findAndReplacePattern', () => {
  const tests = [
    {
      words: ['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'],
      pattern: 'abb',
      result: ['mee', 'aqq'],
    },
    {
      words: [
        'qxrwtncxyoqwmsxoavos',
        'eqvzjrnqgkezxmqkhdkm',
        'pjxmgdujohpmtsjhazhs',
        'yqhlipeqwnylkrqnsbnr',
        'plktdyslmoptqflowaof',
      ],
      pattern: 'ghtxpauhingxekhnoqnk',
      result: [
        'qxrwtncxyoqwmsxoavos',
        'eqvzjrnqgkezxmqkhdkm',
        'pjxmgdujohpmtsjhazhs',
        'yqhlipeqwnylkrqnsbnr',
        'plktdyslmoptqflowaof',
      ],
    },
  ];

  _.forEach(tests, ({ words, pattern, result }) => {
    it(`${words}, ${pattern} -> ${result}`, () => {
      assert.deepStrictEqual(findAndReplacePattern(words, pattern), result);
    });
  });
});
