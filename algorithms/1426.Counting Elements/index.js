/**
 * @param {number[]} arr
 * @return {number}
 */
function countElements(arr) {
  const set = new Set(arr.map(n => n - 1));
  return arr.reduce((sum, num) => sum + ~~set.has(num), 0);
}
