
function binarySearchList(list, iter) {
  let left = 0;
  let right = list.length;
  while (left < right) {
    const mid = (left + (right - left) / 2) | 0;
    if (iter(list[mid], mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return list[left];
}

function binarySearchNum(n, iter) {
  let left = 0;
  let right = n;
  while (left < right) {
    const mid = (left + (right - left) / 2) | 0;
    if (iter(mid, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
