/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const l = s.length;
  for (let i = 0; i < l / 2; i++) {
    const j = l - i - 1;
    [s[i], s[j]] = [s[j], s[i]];
  }
}
