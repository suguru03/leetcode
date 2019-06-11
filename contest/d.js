/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
  expression = `{${expression}}`;
  const l = expression.length;
  const [result] = dfs(0);
  const set = new Set(result);
  const arr = Array.from(set);
  arr.sort((s1, s2) => s1.localeCompare(s2));
  return arr;

  function dfs(s) {
    let list = [];
    let curList = [];
    let i = s;
    let cur = '';
    loop: for (; i < l; i++) {
      const c = expression.charAt(i);
      switch (c) {
        case '{':
          const [arr, index] = dfs(i + 1);
          i = index;
          for (const [i, w] of arr.entries()) {
            arr[i] = cur + w;
          }
          if (curList.length) {
            const next = [];
            for (const w1 of curList) {
              for (const w2 of arr) {
                next.push(w1 + w2);
              }
            }
            curList = next;
          } else {
            curList = arr;
          }
          cur = '';
          continue;
        case '}':
          if (curList.length) {
            for (const [i, w] of curList.entries()) {
              curList[i] = w + cur;
            }
          } else {
            cur && curList.push(cur);
          }
          cur = '';
          break loop;
        case ',':
          cur && curList.push(cur);
          list.push(...curList);
          curList.length = 0;
          cur = '';
          break;
        default:
          cur += c;
          continue;
      }
    }
    list.push(...curList);
    return [list, i];
  }
};

console.log(braceExpansionII('{a,b}'));
console.log(braceExpansionII('{a,b}{c{d,e}}'));
console.log(braceExpansionII('{a,z},a{b,c}'));
console.log(braceExpansionII('{{a,z},a{b,c},{ab,z}}'));
console.log(braceExpansionII('{a,b}c{d,e}f'));
