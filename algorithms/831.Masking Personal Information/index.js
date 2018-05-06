'use strict';

module.exports = { maskPII };

/**
 * @param {string} S
 * @return {string}
 */
function maskPII(S) {
  return /@/.test(S) ? email(S) : phone(S);
}

function email(S) {
  S = S.toLowerCase();
  const index = S.indexOf('@');
  return `${S[0]}*****${S.slice(index - 1)}`;
}

function phone(S) {
  const nums = S.match(/\d+/g).join('');
  const rest = nums.slice(-4);
  let s = '';
  for (let i = 0; i < nums.length - 10; i++) {
    s += '*';
  }
  return s ? `+${s}-***-***-${rest}` : `***-***-${rest}`;
}
