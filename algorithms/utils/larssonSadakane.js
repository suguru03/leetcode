'use strict';

// const { quickSort } = require('./quickSort');

module.exports = { larssonSadakane };

/**
 * @see http://www.iss.is.tohoku.ac.jp/~stringpedia/ja/DataStructures/SuffixArray.html
 * @param str
 */
function larssonSadakane(str) {
  const n = str.length;
  let m = 0;
  let sa = Array(n + 1).fill(n);
  const rank = Array(n + 1).fill(0);
  const order = Array(n + 1).fill(0);
  const interval = Array(n + 2).fill(0);
  for (let i = 0; i < n; i++) {
    sa[i] = i;
    rank[i] = str.charCodeAt(i);
  }
  let h = 0;
  while (order[n] !== n) {
    interval[++m] = n + 1;
    for (let i = 0; m > 0; i++, m--) {
      const x = interval[i];
      const y = interval[i + 1];
      const arr = sa.slice(x, y).sort(comparator);
      sa.splice(x, y - x, ...arr);
      // TODO: 🤔
      // sa = quickSort(sa, { x, y, comparator });
    }

    for (let i = 0; i < n; i++) {
      order[i + 1] = order[i];
      if (comparator(sa[i], sa[i + 1]) < 0) {
        order[i + 1]++;
        interval[++m] = i + 1;
      }
    }
    for (let i = 0; i <= n; i++) {
      rank[sa[i]] = order[i];
    }
    h = h << 1 || ++h;
  }
  return sa;
  function comparator(a, b) {
    return rank[a] !== rank[b] ? rank[a] - rank[b] : rank[a + h] - rank[b + h];
  }
}
