'use strict';

const assert = require('assert');

const _ = require('lodash');

const { toGoatLatin } = require('./');

describe('#toGoatLatin', () => {
  const tests = [
    {
      S: 'I speak Goat Latin',
      result: 'Imaa peaksmaaa oatGmaaaa atinLmaaaaa',
    },
    {
      S: 'The quick brown fox jumped over the lazy dog',
      result:
        'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa',
    },
  ];

  _.forEach(tests, ({ S, result }) => {
    it(`S: ${S} => ${result}`, () => {
      assert.deepStrictEqual(toGoatLatin(S), result);
    });
  });
});
