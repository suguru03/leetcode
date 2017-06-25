public class Solution {
  public int lengthOfLastWord(String s) {
    int l = s.length();
    int result = 0;
    while (l-- != 0) {
      char c = s.charAt(l);
      if (c == ' ') {
        if (result == 0) {
          continue;
        }
        break;
      }
      result++;
    }
    return result;
  }
}
