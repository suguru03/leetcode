'use strict';

module.exports = { rankTeams };

/**
 * @param {string[]} votes
 * @return {string}
 */
function rankTeams(votes) {
  const countMap = new Map();
  for (const str of votes) {
    for (const [index, char] of Object.entries(str)) {
      const ranks = countMap.get(char) || Array(str.length).fill(0);
      ranks[index]++;
      countMap.set(char, ranks);
    }
  }
  return Array.from(countMap.keys())
    .sort((k1, k2) => {
      const r1 = countMap.get(k1);
      const r2 = countMap.get(k2);
      for (const [rank, c1] of r1.entries()) {
        const c2 = r2[rank];
        if (c1 !== c2) {
          return c2 - c1;
        }
      }
      return k1.localeCompare(k2);
    })
    .join('');
}
