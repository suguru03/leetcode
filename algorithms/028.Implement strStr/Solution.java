import java.util.HashMap;
public class Solution {
  public int strStr(String haystack, String needle) {
    int size = haystack.length();
    int needleSize = needle.length();
    if (haystack.equals(needle) || needleSize == 0) {
      return 0;
    }
    if (size <= needleSize) {
      return -1;
    }
    HashMap<String, Integer> map = new HashMap<String, Integer>();
    for (int i = 1; i <= needleSize; i++) {
      String str = needle.substring(0, i);
      map.put(str, i);
    }
    for (int i = 0; i <= size - needleSize; i++) {
      for (int j = 1; j <= needleSize; j++) {
        String str = haystack.substring(i, i + j);
        if (!map.containsKey(str)) {
          break;
        }
        if (map.get(str) == needleSize) {
          return i;
        }
      }
    }
    return -1;
  }
}
