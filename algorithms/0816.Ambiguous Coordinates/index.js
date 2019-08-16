'use strict';

module.exports = { ambiguousCoordinates };

/**
 * @param {string} S
 * @return {string[]}
 */
function ambiguousCoordinates(S) {
  const s = S.replace(/\((\d+)\)/, '$1');
  const l = s.length;

  const map = {};
  for (let i = 0; i < l - 1; i++) {
    const s1 = resolveDecimal(s.slice(0, i + 1));
    if (!s1) {
      continue;
    }
    const s2 = resolveDecimal(s.slice(i + 1, l));
    if (!s2) {
      continue;
    }
    map[s1] = s2;
  }

  const result = [];
  for (const [s1, s2] of Object.entries(map)) {
    const l1 = s1.length;
    const l2 = s2.length;
    for (let i = 0; i < l1; i++) {
      const r1 = createNextDecimal(s1, i);
      for (let j = 0; j < l2; j++) {
        const r2 = createNextDecimal(s2, j);
        push(r1, r2);
        if (/\./.test(s2)) {
          break;
        }
      }
      if (/\./.test(s1)) {
        break;
      }
    }
  }

  return result;

  function check(s) {
    const n = parseFloat(s);
    return s.length === `${n}`.length;
  }

  function resolveDecimal(s) {
    if (!/^0/.test(s) || s.length === 1) {
      return s;
    }
    s = s.replace(/^0/, '0.');
    return check(s) ? s : '';
  }

  function createNextDecimal(s, n) {
    return n === 0 ? s : s.replace(new RegExp(`(\\d{${n}})`), '$1.');
  }

  function push(n1, n2) {
    if (!check(n1) || !check(n2)) {
      return;
    }
    result.push(`(${n1}, ${n2})`);
  }
}
