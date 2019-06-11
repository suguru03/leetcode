/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  const map = {};
  for (const [p, s, e] of trips) {
    map[s] = map[s] || 0;
    map[s] += p;
    map[e] = map[e] || 0;
    map[e] -= p;
  }
  let cur = 0;
  for (let i = 0; i <= 1000; i++) {
    if (!map[i]) {
      continue;
    }
    cur += map[i];
    if (cur > capacity) {
      return false;
    }
  }
  return true;
};
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 4));
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 5));
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 3));
console.log(carPooling([[3, 2, 7], [3, 7, 9], [8, 3, 9]], 11));
console.log(carPooling([[10,5,7],[10,3,4],[7,1,8],[6,3,4]], 24)); // true
