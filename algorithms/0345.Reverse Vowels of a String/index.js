'use strict';

module.exports = { reverseVowels, reverseVowels2 };

/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
  const re = /[aeiou]/i;
  const chars = s.split('');
  let left = -1;
  let right = s.length;
  while (++left < --right) {
    if (!re.test(chars[left])) {
      right++;
      continue;
    }
    if (!re.test(chars[right])) {
      left--;
      continue;
    }
    [chars[right], chars[left]] = [chars[left], chars[right]];
  }
  return chars.join('');
}

/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels2(s) {
  const re = /[aeiou]/i;
  let left = -1;
  let right = s.length;
  let prefix = '';
  let suffix = '';
  while (++left <= --right) {
    const c1 = s[left];
    if (!re.test(c1)) {
      prefix += c1;
      right++;
      continue;
    }
    const c2 = s[right];
    if (!re.test(c2)) {
      suffix = c2 + suffix;
      left--;
      continue;
    }
    if (left === right) {
      prefix += c1;
      break;
    }
    prefix += c2;
    suffix = c1 + suffix;
  }
  return prefix + suffix;
}
