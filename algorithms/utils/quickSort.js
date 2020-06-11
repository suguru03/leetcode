'use strict';

module.exports = { quickSort };

const defaultComparator = (n1, n2) => n1 - n2;

function quickSort(arr, { comparator = defaultComparator, x = 0, y = arr.length } = {}) {
  const wrapper = (o1, i1, o2, i2) => comparator(o1, o2) || i1 - i2;
  sort(arr, wrapper, x, y - 1, x, y);
  return arr;
}

function sort(arr, comparator, left, right, x, y) {
  if (left >= right || left < x || right >= y) {
    return;
  }
  let l = left;
  let r = right;
  const m = (r + (l - r) / 2) | 0;
  const pivot = arr[m];
  while (true) {
    while (comparator(arr[l], l, pivot, m) < 0) {
      l++;
    }
    while (comparator(pivot, m, arr[r], r) < 0) {
      r--;
    }
    if (l >= r) {
      break;
    }
    [arr[r--], arr[l++]] = [arr[l], arr[r]];
  }
  sort(arr, comparator, left, l - 1, x, y);
  sort(arr, comparator, r + 1, right, x, y);
}
