'use strict';

module.exports = { maxLength, maxLength2: maxScoreWords() };

/**
 * @param {string[]} arr
 * @return {number}
 */
function maxLength(arr) {
  const setList = [];
  for (const str of arr) {
    const set = new Set(str);
    if (set.size !== str.length) {
      continue;
    }
    setList.push(set);
  }
  return dfs(0, new Set());

  function dfs(index, cur) {
    let max = cur.size;
    loop: for (let i = index; i < setList.length; i++) {
      const set = setList[i];
      for (const c of cur) {
        if (set.has(c)) {
          continue loop;
        }
      }
      for (const c of set) {
        cur.add(c);
      }
      max = Math.max(max, dfs(i + 1, cur));
      for (const c of set) {
        cur.delete(c);
      }
    }
    return max;
  }
}

/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} scores
 * @return {number}
 */
function maxScoreWords(
  words,
  letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97)),
  scores = Array.from({ length: 26 }, () => 1),
) {
  const countMap = {};
  const cur = {};
  for (const [i] of scores.entries()) {
    const c = String.fromCharCode(i + 97);
    cur[c] = 0;
    countMap[c] = 0;
  }
  for (const c of letters) {
    countMap[c]++;
  }
  const counts = words.map(word => {
    const map = new Map();
    for (const c of word) {
      map.set(c, map.has(c) ? map.get(c) + 1 : 1);
    }
    return map;
  });

  let max = 0;
  func(0, 0, []);
  return max;

  function func(index, score) {
    loop: for (let i = index; i < counts.length; i++) {
      const map = counts[i];
      for (let [c, count] of map) {
        if (cur[c] + count > countMap[c]) {
          continue loop;
        }
      }
      for (let [c, count] of map) {
        cur[c] += count;
        score += scores[c.charCodeAt(0) - 97] * count;
      }
      const s = func(i + 1, score);
      max = Math.max(max, s);
      for (let [c, count] of map) {
        cur[c] -= count;
        score -= scores[c.charCodeAt(0) - 97] * count;
      }
    }
    return score;
  }
}
