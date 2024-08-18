'use strict';

module.exports = { pacificAtlantic, pacificAtlantic2 };

const Mark = {
  Pacific: 1 << 0,
  Atlantic: 1 << 1,
};

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
function pacificAtlantic(heights) {
  const target = Mark.Pacific | Mark.Atlantic;
  const result = [];
  const h = heights.length;
  const w = heights[0].length;
  const marks = Array.from(heights, (row) => Array(row.length).fill(0));
  for (let c = 0; c < w; c++) {
    track(c, 0, 0, Mark.Pacific);
    track(c, h - 1, 0, Mark.Atlantic);
  }
  for (let r = 0; r < h; r++) {
    track(0, r, 0, Mark.Pacific);
    track(w - 1, r, 0, Mark.Atlantic);
  }

  return result;

  function track(c, r, prev, mark) {
    if (r < 0 || r >= h || c < 0 || c >= w) {
      return;
    }

    if (heights[r][c] < prev) {
      return;
    }

    if ((marks[r][c] & mark) === mark) {
      return;
    }

    marks[r][c] |= mark;
    if (marks[r][c] === target) {
      result.push([r, c]);
    }

    prev = heights[r][c];
    track(c - 1, r, prev, mark);
    track(c, r - 1, prev, mark);
    track(c + 1, r, prev, mark);
    track(c, r + 1, prev, mark);
  }
}

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
function pacificAtlantic2(heights) {
  const result = [];
  const seen = new Set();
  let pacific = false;
  let atlantic = false;
  for (let r = 0; r < heights.length; r++) {
    for (let c = 0; c < heights[r].length; c++) {
      seen.clear();
      pacific = false;
      atlantic = false;
      track(c, r, Infinity);
      if (pacific && atlantic) {
        result.push([r, c]);
      }
    }
  }
  return result;

  function track(r, c, prev) {
    if (c < 0 || c >= heights.length || r < 0 || r >= heights[c].length) {
      return;
    }

    if (heights[c][r] > prev) {
      return;
    }

    const key = `${r}:${c}`;
    if (seen.has(key)) {
      return;
    }
    seen.add(key);

    pacific ||= r === 0 || c === 0;
    atlantic ||= r === heights[c].length - 1 || c === heights.length - 1;
    if (pacific && atlantic) {
      return;
    }
    prev = heights[c][r];
    track(r - 1, c, prev);
    track(r, c - 1, prev);
    track(r + 1, c, prev);
    track(r, c + 1, prev);
  }
}
