'use strict';

const assert = require('assert');
const _ = require('lodash');
const { shortestSuperstring } = require('./');

describe('#shortestSuperstring', () => {
  const tests = [
    {
      A: ['alex', 'loves', 'leetcode'],
      // result: 'alexlovesleetcode',
      result: 'leetcodelovesalex',
    },
    {
      A: ['ctaagt', 'gcta', 'ttca'],
      result: 'gctaagttca',
    },
    {
      A: ['catg', 'ctaagt', 'gcta', 'ttca', 'atgcatc'],
      result: 'gctaagttcatgcatc',
    },
    {
      A: ['fzhzt', 'nhm', 'lbifz', 'mhlb'],
      result: 'nhmhlbifzhzt',
    },
    {
      A: ['fzhzt', 'nhm', 'lbifz', 'bifzh', 'mhlb'],
      result: 'nhmhlbifzhzt',
    },
    {
      A: ['fkwel', 'pbcba', 'kpbc', 'bcbab', 'pfkwe'],
      result: 'kpbcbabpfkwel',
      // result: 'pfkwelkpbcbab',
    },
    {
      A: [
        'kwteuapmmy',
        'zuzsskwt',
        'kxrmmpo',
        'uapmmyexv',
        'pmmyexvdj',
        'wnouzuzss',
        'djbkxrmm',
      ],
      result: 'wnouzuzsskwteuapmmyexvdjbkxrmmpo',
    },
    {
      A: [
        'pqtifawzoessrpjwnjf',
        'wnjfjehefpipubizjx',
        'vpmafqkvixcumugp',
        'tzucldkoizjhyat',
        'umugpqtifawzoes',
        'zjxtifiolejwstzuc',
        'pjwnjfjehefpipub',
        'ifiolejwstzucldko',
      ],
      result:
        'vpmafqkvixcumugpqtifawzoessrpjwnjfjehefpipubizjxtifiolejwstzucldkoizjhyat',
    },
  ];

  _.forEach(tests, ({ A, result }) => {
    it(`${A} -> ${result}`, () => {
      assert.deepStrictEqual(shortestSuperstring(A), result);
    });
  });
});
