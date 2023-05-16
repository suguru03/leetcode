'use strict';

module.exports = { isValid, isValid2 };

const map = {
  '(': ')',
  '[': ']',
  '{': '}',
};

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  let l = s.length;
  while (l--) {
    const c = s[l];
    if (!map[c]) {
      stack.push(c);
      continue;
    }
    if (map[c] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}

function isValid2(s) {
  const stack = [];
  for (const c of s) {
    if (map[c]) {
      stack.push(map[c]);
      continue;
    }

    if (c !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}
