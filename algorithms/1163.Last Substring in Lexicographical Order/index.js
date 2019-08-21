'use strict';

const { larssonSadakane } = require('../utils');

module.exports = { lastSubstring, lastSubstring2, lastSubstring3 };

/**
 * @param {string} s
 * @return {string}
 */
function lastSubstring(s) {
  let max = -1;
  const indexes = [];
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    if (code < max) {
      continue;
    }
    if (code > max) {
      max = code;
      indexes.length = 0;
    }
    indexes.push(i);
  }
  let res = '';
  for (const i of indexes) {
    const str = s.substr(i);
    if (str > res) {
      res = str;
    }
  }
  return res;
}

/**
 * @param {string} s * @return {string} */
function lastSubstring2(s) {
  let max = '';
  for (let i = 0; i < s.length; i++) {
    const str = s.substr(i);
    if (str > max) {
      max = str;
    }
  }
  return max;
}

/**
 * @param {string} s
 * @return {string}
 */
function lastSubstring3(s) {
  const sa = larssonSadakane(s);
  return s.substr(sa.pop());
}
