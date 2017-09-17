'use strict';

module.exports = { checkValidString };

/**
 * @param {string} s
 * @return {boolean}
 */
function checkValidString(s) {
  const array = s.split('');
  const a = [];
  let l = s.length;
  let count = 0;
  for (let i = 0; i < l; i++) {
    const c = array[i];
    switch (c) {
    case '(':
      count++;
      break;
    case ')':
      if (count > 0) {
        count--;
        continue;
      }
      if (!a.length) {
        return false;
      }
      array[a.shift()] = '(';
      break;
    case '*':
      a.push(i);
      break;
    }
  }
  count = 0;
  let ca = 0;
  while (l--) {
    const c = array[l];
    switch (c) {
    case ')':
      count++;
      break;
    case '(':
      if (count > 0) {
        count--;
        continue;
      }
      if (ca > 0) {
        ca--;
        continue;
      }
      return false;
    case '*':
      ca++;
      break;
    }
  }
  return true;
}
